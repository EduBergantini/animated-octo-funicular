// package: operations
// file: probe.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as probe_pb from "./probe_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProbeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendProbeUnary: IProbeService_ISendProbeUnary;
    sendProbeClientStream: IProbeService_ISendProbeClientStream;
}

interface IProbeService_ISendProbeUnary extends grpc.MethodDefinition<probe_pb.ProbeRequest, probe_pb.ProbeReply> {
    path: "/operations.Probe/SendProbeUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<probe_pb.ProbeRequest>;
    requestDeserialize: grpc.deserialize<probe_pb.ProbeRequest>;
    responseSerialize: grpc.serialize<probe_pb.ProbeReply>;
    responseDeserialize: grpc.deserialize<probe_pb.ProbeReply>;
}
interface IProbeService_ISendProbeClientStream extends grpc.MethodDefinition<probe_pb.ProbeRequest, probe_pb.ProbeReply> {
    path: "/operations.Probe/SendProbeClientStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<probe_pb.ProbeRequest>;
    requestDeserialize: grpc.deserialize<probe_pb.ProbeRequest>;
    responseSerialize: grpc.serialize<probe_pb.ProbeReply>;
    responseDeserialize: grpc.deserialize<probe_pb.ProbeReply>;
}

export const ProbeService: IProbeService;

export interface IProbeServer extends grpc.UntypedServiceImplementation {
    sendProbeUnary: grpc.handleUnaryCall<probe_pb.ProbeRequest, probe_pb.ProbeReply>;
    sendProbeClientStream: grpc.handleClientStreamingCall<probe_pb.ProbeRequest, probe_pb.ProbeReply>;
}

export interface IProbeClient {
    sendProbeUnary(request: probe_pb.ProbeRequest, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    sendProbeUnary(request: probe_pb.ProbeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    sendProbeUnary(request: probe_pb.ProbeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    sendProbeClientStream(callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    sendProbeClientStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    sendProbeClientStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    sendProbeClientStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
}

export class ProbeClient extends grpc.Client implements IProbeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendProbeUnary(request: probe_pb.ProbeRequest, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    public sendProbeUnary(request: probe_pb.ProbeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    public sendProbeUnary(request: probe_pb.ProbeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientUnaryCall;
    public sendProbeClientStream(callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    public sendProbeClientStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    public sendProbeClientStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
    public sendProbeClientStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: probe_pb.ProbeReply) => void): grpc.ClientWritableStream<probe_pb.ProbeRequest>;
}
