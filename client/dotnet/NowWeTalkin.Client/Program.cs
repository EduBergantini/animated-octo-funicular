using Grpc.Net.Client;
using NowWeTalkin.Client;
using NowWeTalkin.Server.Grpc;

var cancellationToken = new CancellationTokenSource();
Console.CancelKeyPress += (sender, eventArgs) =>
{
    eventArgs.Cancel = false;
    cancellationToken.Cancel();
};
Console.WriteLine("Pressione CTRL + C para cancelar.");

RequestController controller = new();
using var channel = GrpcChannel.ForAddress("https://localhost:7038/");
var rechargeClient = new CardRecharge.CardRechargeClient(channel);
var hotListClient = new Hotlist.HotlistClient(channel);
var probeClient = new Probe.ProbeClient(channel);

while (!cancellationToken.IsCancellationRequested)
{
    Console.WriteLine("SELECIONE UMA AÇÃO:");
    Console.WriteLine("1. Enviar uma única requisição de compra de recarga.");
    Console.WriteLine("2. Abrir um canal de comunicação de compra de recarga.");
    Console.WriteLine("3. Obter próximo item da lista de cartões em Hotlist.");
    Console.WriteLine("4. Abrir um canal para receber lista de cartões em Hotlist.");
    Console.WriteLine("5. Enviar informação de geolocalização.");
    Console.WriteLine("6. Abrir um canal para enviar informações de geolocalização.");
    Console.WriteLine("Pressione qualquer outra tecla para finalizar.");
    var action = Console.ReadKey().KeyChar;
    switch (action)
    {
        case '1':
            await controller.MakeSingleRequestAsync(rechargeClient, cancellationToken.Token);
            break;
        case '2':
            controller.OpenCardRechargeStreaming(rechargeClient, cancellationToken.Token);
            break;
        case '3':
            await controller.GetNextHotlistAsync(hotListClient, cancellationToken.Token);
            break;
        case '4':
            await controller.GetHotlistStreaming(hotListClient, cancellationToken.Token);
            break;
        case '5':
            await controller.SendProbeAsync(probeClient, cancellationToken.Token);
            break;
        case '6':
            await controller.SendProbeStreaming(probeClient, cancellationToken.Token);
            break;
        default:
            if(!cancellationToken.IsCancellationRequested)
                cancellationToken.Cancel();
            break;
    }   
}

Console.WriteLine("Finalizado.");