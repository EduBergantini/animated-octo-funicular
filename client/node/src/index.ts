// const promptSync = require("prompt-sync");
import promptSync from "prompt-sync";
import { ChannelCredentials } from '@grpc/grpc-js'
import { CardRechargeClient } from './protos/card_recharge_grpc_pb';
import { makeRechargeRequest } from './factory';
import CardRechargeUseCase from "./use-cases/card-recharge-use-case";
import * as console from "console";
import {CardRechargeReply} from "./protos/card_recharge_pb";

const prompter = promptSync();
let oscarFlag: boolean = true;

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    oscarFlag = false;
});

const cardRecharge = new CardRechargeClient('localhost:5240', ChannelCredentials.createInsecure());
const cardRecgargeUseCase = new CardRechargeUseCase(cardRecharge);

//while (oscarFlag) {
    console.log('SELECIONE UMA AÇÃO:');
    console.log('1. Enviar uma única requisição de compra de recarga.');
    console.log('2. Abrir um canal de comunicação de compra de recarga.');
    console.log('3. Obter próximo item da lista de cartões em Hotlist.');
    console.log('4. Abrir um canal para receber lista de cartões em Hotlist.');
    console.log('5. Enviar informação de geolocalização.');
    console.log('6. Abrir um canal para enviar informações de geolocalização.');
    console.log('Pressione qualquer outra tecla para finalizar.');
    const answer = prompter('');
    switch (answer) {
        case '1':
            cardRecgargeUseCase.requestRecharge(makeRechargeRequest())
                .then((response) =>{
                    console.log(`Status: ${response.getStatus()}`);
                    console.log(`Message: ${response.getMessage()}`);
                    console.log(`TransactionNumber: ${response.getTransactionNumber()}`);
                });
        break;
        case '2':
            cardRecgargeUseCase.requestRechargeStreaming(oscarFlag, (response: CardRechargeReply) =>{
                console.log(`Status: ${response.getStatus()}`);
                console.log(`Message: ${response.getMessage()}`);
                console.log(`TransactionNumber: ${response.getTransactionNumber()}`);
            });
        break;
        case '3':
        
        break;
        case '4':
        
        break;
        case '5':
        
        break;
        case '6':
        
        break;
        default:
            oscarFlag = false;
            console.log('Finalizado');
            break;
//    }
}
