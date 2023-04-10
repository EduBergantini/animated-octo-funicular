using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using NowWeTalkin.Server.Grpc;
using NowWeTalkin.Server.UseCases;

namespace NowWeTalkin.Server.Services;

public class HotlistService : Hotlist.HotlistBase
{
    private readonly ILogger<HotlistService> _logger;

    public HotlistService(ILogger<HotlistService> logger)
    {
        _logger = logger;
    }

    public override async Task<HotlistReply> RequestHotlistUnary(HotlistRequest request, ServerCallContext context)
    {
        try
        {
            _logger.LogInformation("Requisição recebida: {0}", request);
            await Task.Delay(1000);
            var currentHotlist = DummyHotlistUseCase.GetHotListByIndex(request.Index);
            if (!currentHotlist.HasValue)
            {
                return new HotlistReply { Status = DummyHotlistUseCase.NoNewItem, Index = -1 };
            }

            return new HotlistReply
            {
                Status = 0,
                Index = currentHotlist.Value.Index,
                Action = (HotlistAction)currentHotlist.Value.Action,
                IssuerId = currentHotlist.Value.IssuerId,
                CardDesignId = currentHotlist.Value.CardDesignId,
                CardSerialNumber = currentHotlist.Value.CardSerialNumber,
                RegisterDate = Timestamp.FromDateTimeOffset(currentHotlist.Value.RegisterDate)
            };
        }
        catch (IOException e) when (e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning("Canal de comunicação fechado pelo cliente.");
            return new HotlistReply { Status = DummyHotlistUseCase.FailedToFetch, Index = -1 };
        }
        catch (Exception e)
        {
            _logger.LogCritical(e, "Falha nao esperada no canal de comunicação");
            return new HotlistReply { Status = DummyHotlistUseCase.FailedToFetch, Index = -1 };
        }
    }

    public override async Task RequestHotlistServerStream(HotlistRequest request,
        IServerStreamWriter<HotlistReply> responseStream, ServerCallContext context)
    {
        try
        {
            foreach (var hotlist in DummyHotlistUseCase.GetHotListFrom(request.Index))
            {
                _logger.LogInformation("Requisição recebida: {0}", request);
                await Task.Delay(Random.Shared.Next(50, 200));
                var response = new HotlistReply
                {
                    Status = 0,
                    Index = hotlist.Index,
                    Action = (HotlistAction)hotlist.Action,
                    IssuerId = hotlist.IssuerId,
                    CardDesignId = hotlist.CardDesignId,
                    CardSerialNumber = hotlist.CardSerialNumber,
                    RegisterDate = Timestamp.FromDateTimeOffset(hotlist.RegisterDate)
                };
                _logger.LogInformation("Resposta enviada: {0}", response);
                await responseStream.WriteAsync(response, context.CancellationToken);
            }
        }
        catch (OperationCanceledException)
        {
            _logger.LogWarning(
                "Canal de comunicação fechado pelo cliente. Operação cancelada."); // Cliente nao recebeu a ultima resposta
        }
        catch (IOException e) when (e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning(
                "Canal de comunicação fechado pelo cliente no momento da escrita."); // Cliente recebey a ultima resposta
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }
}