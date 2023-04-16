import {ICardRechargeClient} from "src/protos/card_recharge_grpc_pb";
import {CardRechargeReply, CardRechargeRequest} from "src/protos/card_recharge_pb";
import {makeRechargeRequest} from "../factory";

class CardRechargeUseCase {
    constructor(private readonly cardRechargeClient: ICardRechargeClient) {}


    public requestRecharge(rechargeRequest: CardRechargeRequest): Promise<CardRechargeReply> {
        return new Promise<CardRechargeReply>((resolve, reject) => {
            return this.cardRechargeClient.requestRechargeUnary(rechargeRequest, (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });
    }

    public requestRechargeStreaming(keepAlive: boolean, responseHandler: Function) {
        const serviceStream = this.cardRechargeClient.requestRechargeStream();
        serviceStream.on('data', (response: CardRechargeReply) => {responseHandler(response);});
        serviceStream.on("error", function(error) {
            console.error(`ERROR: ${error}`);
        });
        serviceStream.on('end', function() {
            console.debug(`Channel closed`);
        });
        serviceStream.on('status', function (data) {
           console.debug(data);
        });

        while (keepAlive) {
            console.log(keepAlive);
            const request = makeRechargeRequest();
            console.log("ENVIANDO MENSAGEM");
            serviceStream.write(request);
            serviceStream.end();
            console.log("AGUARDANDO");
            this.sleep();
            console.log("PROXIMA MENSAGEM");
        }

    }

    private sleep(): void {
        const randomTimerMillis = Math.floor(Math.random() * 1000);
        setTimeout(function () {
            console.log(`Aguardando ${randomTimerMillis} ms.`);
        }, randomTimerMillis);
    }
}

export default CardRechargeUseCase;