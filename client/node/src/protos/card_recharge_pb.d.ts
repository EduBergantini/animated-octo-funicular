// package: operations
// file: card_recharge.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CardRechargeRequest extends jspb.Message { 

    hasCardInternalSerialNumber(): boolean;
    clearCardInternalSerialNumber(): void;
    getCardInternalSerialNumber(): number | undefined;
    setCardInternalSerialNumber(value: number): CardRechargeRequest;
    getIssuerId(): number;
    setIssuerId(value: number): CardRechargeRequest;
    getCardDesignId(): number;
    setCardDesignId(value: number): CardRechargeRequest;
    getCardSerialNumber(): number;
    setCardSerialNumber(value: number): CardRechargeRequest;
    getApplicationId(): number;
    setApplicationId(value: number): CardRechargeRequest;

    hasDocumentType(): boolean;
    clearDocumentType(): void;
    getDocumentType(): DocumentType | undefined;
    setDocumentType(value: DocumentType): CardRechargeRequest;

    hasDocumentNumber(): boolean;
    clearDocumentNumber(): void;
    getDocumentNumber(): string | undefined;
    setDocumentNumber(value: string): CardRechargeRequest;
    getRechargeValueInCents(): number;
    setRechargeValueInCents(value: number): CardRechargeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardRechargeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CardRechargeRequest): CardRechargeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardRechargeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardRechargeRequest;
    static deserializeBinaryFromReader(message: CardRechargeRequest, reader: jspb.BinaryReader): CardRechargeRequest;
}

export namespace CardRechargeRequest {
    export type AsObject = {
        cardInternalSerialNumber?: number,
        issuerId: number,
        cardDesignId: number,
        cardSerialNumber: number,
        applicationId: number,
        documentType?: DocumentType,
        documentNumber?: string,
        rechargeValueInCents: number,
    }
}

export class CardRechargeReply extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): CardRechargeReply;
    getMessage(): string;
    setMessage(value: string): CardRechargeReply;
    getTransactionNumber(): number;
    setTransactionNumber(value: number): CardRechargeReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CardRechargeReply.AsObject;
    static toObject(includeInstance: boolean, msg: CardRechargeReply): CardRechargeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CardRechargeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CardRechargeReply;
    static deserializeBinaryFromReader(message: CardRechargeReply, reader: jspb.BinaryReader): CardRechargeReply;
}

export namespace CardRechargeReply {
    export type AsObject = {
        status: number,
        message: string,
        transactionNumber: number,
    }
}

export enum DocumentType {
    UNKNOWN = 0,
    RG = 1,
    CPF = 2,
}
