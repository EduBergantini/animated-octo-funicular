// package: operations
// file: hotlist.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HotlistRequest extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): HotlistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotlistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HotlistRequest): HotlistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotlistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotlistRequest;
    static deserializeBinaryFromReader(message: HotlistRequest, reader: jspb.BinaryReader): HotlistRequest;
}

export namespace HotlistRequest {
    export type AsObject = {
        index: number,
    }
}

export class HotlistReply extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): HotlistReply;
    getIndex(): number;
    setIndex(value: number): HotlistReply;
    getIssuerId(): number;
    setIssuerId(value: number): HotlistReply;
    getCardDesignId(): number;
    setCardDesignId(value: number): HotlistReply;
    getCardSerialNumber(): number;
    setCardSerialNumber(value: number): HotlistReply;
    getAction(): HotlistAction;
    setAction(value: HotlistAction): HotlistReply;

    hasRegisterDate(): boolean;
    clearRegisterDate(): void;
    getRegisterDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisterDate(value?: google_protobuf_timestamp_pb.Timestamp): HotlistReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotlistReply.AsObject;
    static toObject(includeInstance: boolean, msg: HotlistReply): HotlistReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotlistReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotlistReply;
    static deserializeBinaryFromReader(message: HotlistReply, reader: jspb.BinaryReader): HotlistReply;
}

export namespace HotlistReply {
    export type AsObject = {
        status: number,
        index: number,
        issuerId: number,
        cardDesignId: number,
        cardSerialNumber: number,
        action: HotlistAction,
        registerDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum HotlistAction {
    UPDATE = 0,
    INSERT = 1,
    REMOVE = 2,
}
