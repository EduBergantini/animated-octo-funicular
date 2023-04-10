using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using NowWeTalkin.Server.Grpc;
using NowWeTalkin.Server.UseCases;

namespace NowWeTalkin.Server.Services;

public class ProbeService : Probe.ProbeBase
{
    private readonly ILogger<ProbeService> _logger;

    public ProbeService(ILogger<ProbeService> logger)
    {
        _logger = logger;
    }

    public override async Task<ProbeReply> SendProbeUnary(ProbeRequest request, ServerCallContext context)
    {
        try
        {
            _logger.LogInformation("Requisição recebida: {0}", request);
            await Task.Delay(Random.Shared.Next(100, 1000));
            await DummyProbeUseCase.MergeProbeHistory(request);

            return new ProbeReply
            {
                Status = 0,
                LatestHotlist = DummyHotlistUseCase.GetLatestHotlistIndex(),
                RegisterDate = Timestamp.FromDateTimeOffset(DateTimeOffset.Now)
            };
        }
        catch (IOException e) when (e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning("Canal de comunicação fechado pelo cliente.");
            return new ProbeReply { Status = -1 };
        }
        catch (Exception e)
        {
            _logger.LogCritical(e, "Falha nao esperada no canal de comunicação");
            return new ProbeReply { Status = -1 };
        }
    }

    public override async Task<ProbeReply> SendProbeClientStream(IAsyncStreamReader<ProbeRequest> requestStream,
        ServerCallContext context)
    {
        try
        {
            while (await requestStream.MoveNext())
            {
                _logger.LogInformation("Requisição recebida: {0}", requestStream.Current);
                await Task.Delay(Random.Shared.Next(100, 1000));
                await DummyProbeUseCase.MergeProbeHistory(requestStream.Current);
            }
            
            return new ProbeReply
            {
                Status = 0,
                LatestHotlist = DummyHotlistUseCase.GetLatestHotlistIndex(),
                RegisterDate = Timestamp.FromDateTimeOffset(DateTimeOffset.Now)
            };
        }
        catch (OperationCanceledException)
        {
            _logger.LogWarning(
                "Canal de comunicação fechado pelo cliente. Operação cancelada."); // Cliente nao recebeu a ultima resposta
            return new ProbeReply { Status = -1 };
        }
        catch (IOException e) when (e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning(
                "Canal de comunicação fechado pelo cliente no momento da escrita."); // Cliente recebey a ultima resposta
            return new ProbeReply { Status = -1 };
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return new ProbeReply { Status = -1 };
        }
    }
}