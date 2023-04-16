// package: operations
// file: probe.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ProbeRequest extends jspb.Message { 
    getDeviceId(): number;
    setDeviceId(value: number): ProbeRequest;
    getLatitude(): number;
    setLatitude(value: number): ProbeRequest;
    getLongitude(): number;
    setLongitude(value: number): ProbeRequest;

    getDeviceHealthMap(): jspb.Map<number, DeviceStatus>;
    clearDeviceHealthMap(): void;

    getPendingTransactionsMap(): jspb.Map<number, TransactionStatus>;
    clearPendingTransactionsMap(): void;

    hasRequestDate(): boolean;
    clearRequestDate(): void;
    getRequestDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRequestDate(value?: google_protobuf_timestamp_pb.Timestamp): ProbeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProbeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProbeRequest): ProbeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProbeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProbeRequest;
    static deserializeBinaryFromReader(message: ProbeRequest, reader: jspb.BinaryReader): ProbeRequest;
}

export namespace ProbeRequest {
    export type AsObject = {
        deviceId: number,
        latitude: number,
        longitude: number,

        deviceHealthMap: Array<[number, DeviceStatus]>,

        pendingTransactionsMap: Array<[number, TransactionStatus]>,
        requestDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ProbeReply extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): ProbeReply;
    getLatestHotlist(): number;
    setLatestHotlist(value: number): ProbeReply;

    hasRegisterDate(): boolean;
    clearRegisterDate(): void;
    getRegisterDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisterDate(value?: google_protobuf_timestamp_pb.Timestamp): ProbeReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProbeReply.AsObject;
    static toObject(includeInstance: boolean, msg: ProbeReply): ProbeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProbeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProbeReply;
    static deserializeBinaryFromReader(message: ProbeReply, reader: jspb.BinaryReader): ProbeReply;
}

export namespace ProbeReply {
    export type AsObject = {
        status: number,
        latestHotlist: number,
        registerDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum DeviceStatus {
    UNKNOWN = 0,
    ACTIVE = 1,
    INACTIVE = 2,
}

export enum TransactionStatus {
    CONFIRMED = 0,
    CANCELLED = 1,
}
