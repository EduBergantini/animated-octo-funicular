// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hotlist_pb = require('./hotlist_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_operations_HotlistReply(arg) {
  if (!(arg instanceof hotlist_pb.HotlistReply)) {
    throw new Error('Expected argument of type operations.HotlistReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_HotlistReply(buffer_arg) {
  return hotlist_pb.HotlistReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operations_HotlistRequest(arg) {
  if (!(arg instanceof hotlist_pb.HotlistRequest)) {
    throw new Error('Expected argument of type operations.HotlistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_HotlistRequest(buffer_arg) {
  return hotlist_pb.HotlistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HotlistService = exports.HotlistService = {
  requestHotlistUnary: {
    path: '/operations.Hotlist/RequestHotlistUnary',
    requestStream: false,
    responseStream: false,
    requestType: hotlist_pb.HotlistRequest,
    responseType: hotlist_pb.HotlistReply,
    requestSerialize: serialize_operations_HotlistRequest,
    requestDeserialize: deserialize_operations_HotlistRequest,
    responseSerialize: serialize_operations_HotlistReply,
    responseDeserialize: deserialize_operations_HotlistReply,
  },
  requestHotlistServerStream: {
    path: '/operations.Hotlist/RequestHotlistServerStream',
    requestStream: false,
    responseStream: true,
    requestType: hotlist_pb.HotlistRequest,
    responseType: hotlist_pb.HotlistReply,
    requestSerialize: serialize_operations_HotlistRequest,
    requestDeserialize: deserialize_operations_HotlistRequest,
    responseSerialize: serialize_operations_HotlistReply,
    responseDeserialize: deserialize_operations_HotlistReply,
  },
};

exports.HotlistClient = grpc.makeGenericClientConstructor(HotlistService);
