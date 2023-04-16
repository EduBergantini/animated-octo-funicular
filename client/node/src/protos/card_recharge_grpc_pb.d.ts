// package: operations
// file: card_recharge.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as card_recharge_pb from "./card_recharge_pb";

interface ICardRechargeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    requestRechargeUnary: ICardRechargeService_IRequestRechargeUnary;
    requestRechargeStream: ICardRechargeService_IRequestRechargeStream;
}

interface ICardRechargeService_IRequestRechargeUnary extends grpc.MethodDefinition<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply> {
    path: "/operations.CardRecharge/RequestRechargeUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<card_recharge_pb.CardRechargeRequest>;
    requestDeserialize: grpc.deserialize<card_recharge_pb.CardRechargeRequest>;
    responseSerialize: grpc.serialize<card_recharge_pb.CardRechargeReply>;
    responseDeserialize: grpc.deserialize<card_recharge_pb.CardRechargeReply>;
}
interface ICardRechargeService_IRequestRechargeStream extends grpc.MethodDefinition<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply> {
    path: "/operations.CardRecharge/RequestRechargeStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<card_recharge_pb.CardRechargeRequest>;
    requestDeserialize: grpc.deserialize<card_recharge_pb.CardRechargeRequest>;
    responseSerialize: grpc.serialize<card_recharge_pb.CardRechargeReply>;
    responseDeserialize: grpc.deserialize<card_recharge_pb.CardRechargeReply>;
}

export const CardRechargeService: ICardRechargeService;

export interface ICardRechargeServer extends grpc.UntypedServiceImplementation {
    requestRechargeUnary: grpc.handleUnaryCall<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
    requestRechargeStream: grpc.handleBidiStreamingCall<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
}

export interface ICardRechargeClient {
    requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    requestRechargeStream(): grpc.ClientDuplexStream<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
    requestRechargeStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
    requestRechargeStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
}

export class CardRechargeClient extends grpc.Client implements ICardRechargeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    public requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    public requestRechargeUnary(request: card_recharge_pb.CardRechargeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: card_recharge_pb.CardRechargeReply) => void): grpc.ClientUnaryCall;
    public requestRechargeStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
    public requestRechargeStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<card_recharge_pb.CardRechargeRequest, card_recharge_pb.CardRechargeReply>;
}
