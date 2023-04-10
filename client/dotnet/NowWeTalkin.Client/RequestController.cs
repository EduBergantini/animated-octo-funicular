using Google.Protobuf.Collections;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using NowWeTalkin.Server.Grpc;

namespace NowWeTalkin.Client;

public class RequestController
{
    public async Task MakeSingleRequestAsync(CardRecharge.CardRechargeClient client,
        CancellationToken cancellationToken)
    {
        try
        {
            var cardRecharge =
                await client.RequestRechargeUnaryAsync(MakeRandomCardRequest(), cancellationToken: cancellationToken);
            Console.WriteLine("RESPONSE: {0}", cardRecharge);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }

    public void OpenCardRechargeStreaming(CardRecharge.CardRechargeClient client, CancellationToken cancellationToken)
    {
        try
        {
            using AsyncDuplexStreamingCall<CardRechargeRequest, CardRechargeReply> streaming =
                client.RequestRechargeStream();

            Task.WaitAll(new[]
            {
                SendRequest(streaming.RequestStream, cancellationToken),
                ProcessResponse(streaming.ResponseStream, cancellationToken)
            }, cancellationToken);

            async Task SendRequest(IClientStreamWriter<CardRechargeRequest> streamingRequestStream,
                CancellationToken internalCancellationToken)
            {
                while (!internalCancellationToken.IsCancellationRequested)
                {
                    // wait a moment to simulate network delay or something.. as Barbieri says.. those web thingies
                    await Task.Delay(Random.Shared.Next(100, 3000), internalCancellationToken);

                    // write to stream
                    await streamingRequestStream.WriteAsync(MakeRandomCardRequest(), internalCancellationToken);
                }

                await streamingRequestStream.CompleteAsync();
            }

            async Task ProcessResponse(IAsyncStreamReader<CardRechargeReply> streamingResponseStream,
                CancellationToken internalCancellationToken)
            {
                while (await streamingResponseStream.MoveNext())
                {
                    Console.WriteLine(streamingResponseStream.Current);
                    if (internalCancellationToken.IsCancellationRequested) break;
                }
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("CANCELAMENTO SOLICITADO PELO USUARIO");
        }
        catch (AggregateException e)
        {
            foreach (Exception exception in e.InnerExceptions)
            {
                Console.WriteLine(exception);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }

    public async Task GetNextHotlistAsync(Hotlist.HotlistClient hotListClient, CancellationToken cancellationTokenToken)
    {
        var currentHotlist = new HotlistRequest { Index = 10000 };
        var hotListItem =
            await hotListClient.RequestHotlistUnaryAsync(currentHotlist, cancellationToken: cancellationTokenToken);
        Console.WriteLine("RESPONSE: {0}", hotListItem);
    }

    public async Task GetHotlistStreaming(Hotlist.HotlistClient client, CancellationToken cancellationToken)
    {
        try
        {
            var currentHotlist = new HotlistRequest { Index = 0 };
            using AsyncServerStreamingCall<HotlistReply>? streaming =
                client.RequestHotlistServerStream(currentHotlist, cancellationToken: cancellationToken);

            while (await streaming.ResponseStream.MoveNext())
            {
                Console.WriteLine(streaming.ResponseStream.Current);
                if (cancellationToken.IsCancellationRequested) break;
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("CANCELAMENTO SOLICITADO PELO USUARIO");
        }
        catch (AggregateException e)
        {
            foreach (Exception exception in e.InnerExceptions)
            {
                Console.WriteLine(exception);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }

    public async Task SendProbeAsync(Probe.ProbeClient client, CancellationToken cancellationToken)
    {
        try
        {
            var probeReply =
                await client.SendProbeUnaryAsync(MakeRandomProbeRequest(), cancellationToken: cancellationToken);
            Console.WriteLine("RESPONSE: {0}", probeReply);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }

    public async Task SendProbeStreaming(Probe.ProbeClient client, CancellationToken cancellationToken)
    {
        try
        {
            AsyncClientStreamingCall<ProbeRequest, ProbeReply> sendProbeClientStream =
                client.SendProbeClientStream(cancellationToken: cancellationToken);

            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(Random.Shared.Next(100, 3000), cancellationToken);
                await sendProbeClientStream.RequestStream.WriteAsync(MakeRandomProbeRequest(), cancellationToken);
            }

            await sendProbeClientStream.RequestStream.CompleteAsync();

            Console.WriteLine("RESPONSE: {0}", await sendProbeClientStream.ResponseAsync);
        }
        catch (TaskCanceledException)
        {
            Console.WriteLine("CANCELAMENTO SOLICITADO PELO USUARIO");
        }
        catch (AggregateException e)
        {
            foreach (Exception exception in e.InnerExceptions)
            {
                Console.WriteLine(exception);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }

    private static CardRechargeRequest MakeRandomCardRequest()
    {
        return new CardRechargeRequest
        {
            ApplicationId = Random.Shared.Next(400, 950),
            IssuerId = Random.Shared.Next(10, 99),
            CardDesignId = Random.Shared.Next(1, 9),
            CardSerialNumber = Convert.ToUInt32(Random.Shared.Next(1000, 9999)),
            CardInternalSerialNumber = Convert.ToUInt64(Random.Shared.NextInt64(1, 90000)),
            RechargeValueInCents = Random.Shared.Next(1, 50000),
        };
    }

    private ProbeRequest MakeRandomProbeRequest()
    {
        var probeRequest = new ProbeRequest
        {
            DeviceId = 1,
            Latitude = Random.Shared.NextDouble(),
            Longitude = Random.Shared.NextDouble(),
            DeviceHealth =
            {
                { 1, (DeviceStatus)Random.Shared.Next(0, 3) },
                { 2, (DeviceStatus)Random.Shared.Next(0, 3) },
                { 3, (DeviceStatus)Random.Shared.Next(0, 3) },
                { 4, (DeviceStatus)Random.Shared.Next(0, 3) },
            },
            RequestDate = Timestamp.FromDateTimeOffset(DateTimeOffset.Now)
        };
        probeRequest.PendingTransactions.Add(GetTransactionList());
        return probeRequest;
    }

    private MapField<long, TransactionStatus> GetTransactionList()
    {
        var transactions = new MapField<long, TransactionStatus>();
        if (Random.Shared.Next(1, 100) % 2 == 0)
        {
            transactions.Add(new Dictionary<long, TransactionStatus>()
            {
                { Random.Shared.NextInt64(1, 1000000L), (TransactionStatus)Random.Shared.Next(1, 3) },
                { Random.Shared.NextInt64(1, 1000000L), (TransactionStatus)Random.Shared.Next(1, 3) },
                { Random.Shared.NextInt64(1, 1000000L), (TransactionStatus)Random.Shared.Next(1, 3) },
            });
        }

        return transactions;
    }
}