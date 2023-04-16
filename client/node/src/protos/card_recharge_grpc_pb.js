// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var card_recharge_pb = require('./card_recharge_pb.js');

function serialize_operations_CardRechargeReply(arg) {
  if (!(arg instanceof card_recharge_pb.CardRechargeReply)) {
    throw new Error('Expected argument of type operations.CardRechargeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_CardRechargeReply(buffer_arg) {
  return card_recharge_pb.CardRechargeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operations_CardRechargeRequest(arg) {
  if (!(arg instanceof card_recharge_pb.CardRechargeRequest)) {
    throw new Error('Expected argument of type operations.CardRechargeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_CardRechargeRequest(buffer_arg) {
  return card_recharge_pb.CardRechargeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CardRechargeService = exports.CardRechargeService = {
  requestRechargeUnary: {
    path: '/operations.CardRecharge/RequestRechargeUnary',
    requestStream: false,
    responseStream: false,
    requestType: card_recharge_pb.CardRechargeRequest,
    responseType: card_recharge_pb.CardRechargeReply,
    requestSerialize: serialize_operations_CardRechargeRequest,
    requestDeserialize: deserialize_operations_CardRechargeRequest,
    responseSerialize: serialize_operations_CardRechargeReply,
    responseDeserialize: deserialize_operations_CardRechargeReply,
  },
  requestRechargeStream: {
    path: '/operations.CardRecharge/RequestRechargeStream',
    requestStream: true,
    responseStream: true,
    requestType: card_recharge_pb.CardRechargeRequest,
    responseType: card_recharge_pb.CardRechargeReply,
    requestSerialize: serialize_operations_CardRechargeRequest,
    requestDeserialize: deserialize_operations_CardRechargeRequest,
    responseSerialize: serialize_operations_CardRechargeReply,
    responseDeserialize: deserialize_operations_CardRechargeReply,
  },
};

exports.CardRechargeClient = grpc.makeGenericClientConstructor(CardRechargeService);
