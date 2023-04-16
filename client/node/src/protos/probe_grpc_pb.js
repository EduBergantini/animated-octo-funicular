// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var probe_pb = require('./probe_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_operations_ProbeReply(arg) {
  if (!(arg instanceof probe_pb.ProbeReply)) {
    throw new Error('Expected argument of type operations.ProbeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_ProbeReply(buffer_arg) {
  return probe_pb.ProbeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_operations_ProbeRequest(arg) {
  if (!(arg instanceof probe_pb.ProbeRequest)) {
    throw new Error('Expected argument of type operations.ProbeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_operations_ProbeRequest(buffer_arg) {
  return probe_pb.ProbeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProbeService = exports.ProbeService = {
  sendProbeUnary: {
    path: '/operations.Probe/SendProbeUnary',
    requestStream: false,
    responseStream: false,
    requestType: probe_pb.ProbeRequest,
    responseType: probe_pb.ProbeReply,
    requestSerialize: serialize_operations_ProbeRequest,
    requestDeserialize: deserialize_operations_ProbeRequest,
    responseSerialize: serialize_operations_ProbeReply,
    responseDeserialize: deserialize_operations_ProbeReply,
  },
  sendProbeClientStream: {
    path: '/operations.Probe/SendProbeClientStream',
    requestStream: true,
    responseStream: false,
    requestType: probe_pb.ProbeRequest,
    responseType: probe_pb.ProbeReply,
    requestSerialize: serialize_operations_ProbeRequest,
    requestDeserialize: deserialize_operations_ProbeRequest,
    responseSerialize: serialize_operations_ProbeReply,
    responseDeserialize: deserialize_operations_ProbeReply,
  },
};

exports.ProbeClient = grpc.makeGenericClientConstructor(ProbeService);
