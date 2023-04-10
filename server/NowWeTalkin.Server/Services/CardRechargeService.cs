using Grpc.Core;
using NowWeTalkin.Server.Grpc;
using NowWeTalkin.Server.UseCases;

namespace NowWeTalkin.Server.Services;

public class CardRechargeService : CardRecharge.CardRechargeBase
{
    private readonly ILogger<CardRechargeService> _logger;

    public CardRechargeService(ILogger<CardRechargeService> logger)
    {
        _logger = logger;
    }

    public override async Task<CardRechargeReply> RequestRechargeUnary(CardRechargeRequest request,
        ServerCallContext context)
    {
        try
        {
            _logger.LogInformation("Requisição recebida: {0}", request);
            await Task.Delay(1000);
            return new CardRechargeReply
            {
                Status = 0,
                Message = "REQUISICAO BEM SUCEDIDA",
                TransactionNumber = DummyTransactionNumberUseCase.GetNext()
            };
        }
        catch (IOException e) when(e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning("Canal de comunicação fechado pelo cliente.");
            return new CardRechargeReply { Status = -998, Message = "OPERACAO CANCELADA" };
        }
        catch (Exception e)
        {
            _logger.LogCritical(e, "Falha nao esperada no canal de comunicação");
            return new CardRechargeReply { Status = -999, Message = "FALHA CRITICA." };
        }
    }


    public override async Task RequestRechargeStream(IAsyncStreamReader<CardRechargeRequest> requestStream,
        IServerStreamWriter<CardRechargeReply> responseStream,
        ServerCallContext context)
    {
        try
        {
            while (await requestStream.MoveNext())
            {
                _logger.LogInformation("Requisição recebida: {0}", requestStream.Current);
                await Task.Delay(1000);
                await responseStream.WriteAsync(new CardRechargeReply
                {
                    Status = 0,
                    Message = "REQUISICAO BEM SUCEDIDA",
                    TransactionNumber = DummyTransactionNumberUseCase.GetNext()
                }, context.CancellationToken);
            }
        }
        catch (OperationCanceledException)
        {
            _logger.LogWarning("Canal de comunicação fechado pelo cliente. Operação cancelada."); // Cliente nao recebeu a ultima resposta
        }
        catch (IOException e) when(e.Message.Contains("The client reset the request stream"))
        {
            _logger.LogWarning("Canal de comunicação fechado pelo cliente no momento da escrita."); // Cliente recebey a ultima resposta
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
    }
}