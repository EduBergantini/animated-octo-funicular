// package: operations
// file: hotlist.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hotlist_pb from "./hotlist_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IHotlistService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    requestHotlistUnary: IHotlistService_IRequestHotlistUnary;
    requestHotlistServerStream: IHotlistService_IRequestHotlistServerStream;
}

interface IHotlistService_IRequestHotlistUnary extends grpc.MethodDefinition<hotlist_pb.HotlistRequest, hotlist_pb.HotlistReply> {
    path: "/operations.Hotlist/RequestHotlistUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hotlist_pb.HotlistRequest>;
    requestDeserialize: grpc.deserialize<hotlist_pb.HotlistRequest>;
    responseSerialize: grpc.serialize<hotlist_pb.HotlistReply>;
    responseDeserialize: grpc.deserialize<hotlist_pb.HotlistReply>;
}
interface IHotlistService_IRequestHotlistServerStream extends grpc.MethodDefinition<hotlist_pb.HotlistRequest, hotlist_pb.HotlistReply> {
    path: "/operations.Hotlist/RequestHotlistServerStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<hotlist_pb.HotlistRequest>;
    requestDeserialize: grpc.deserialize<hotlist_pb.HotlistRequest>;
    responseSerialize: grpc.serialize<hotlist_pb.HotlistReply>;
    responseDeserialize: grpc.deserialize<hotlist_pb.HotlistReply>;
}

export const HotlistService: IHotlistService;

export interface IHotlistServer extends grpc.UntypedServiceImplementation {
    requestHotlistUnary: grpc.handleUnaryCall<hotlist_pb.HotlistRequest, hotlist_pb.HotlistReply>;
    requestHotlistServerStream: grpc.handleServerStreamingCall<hotlist_pb.HotlistRequest, hotlist_pb.HotlistReply>;
}

export interface IHotlistClient {
    requestHotlistUnary(request: hotlist_pb.HotlistRequest, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    requestHotlistUnary(request: hotlist_pb.HotlistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    requestHotlistUnary(request: hotlist_pb.HotlistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    requestHotlistServerStream(request: hotlist_pb.HotlistRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hotlist_pb.HotlistReply>;
    requestHotlistServerStream(request: hotlist_pb.HotlistRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hotlist_pb.HotlistReply>;
}

export class HotlistClient extends grpc.Client implements IHotlistClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public requestHotlistUnary(request: hotlist_pb.HotlistRequest, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    public requestHotlistUnary(request: hotlist_pb.HotlistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    public requestHotlistUnary(request: hotlist_pb.HotlistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hotlist_pb.HotlistReply) => void): grpc.ClientUnaryCall;
    public requestHotlistServerStream(request: hotlist_pb.HotlistRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hotlist_pb.HotlistReply>;
    public requestHotlistServerStream(request: hotlist_pb.HotlistRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<hotlist_pb.HotlistReply>;
}
