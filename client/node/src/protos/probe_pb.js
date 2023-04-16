// source: probe.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.operations.DeviceStatus', null, global);
goog.exportSymbol('proto.operations.ProbeReply', null, global);
goog.exportSymbol('proto.operations.ProbeRequest', null, global);
goog.exportSymbol('proto.operations.TransactionStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.operations.ProbeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.operations.ProbeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.operations.ProbeRequest.displayName = 'proto.operations.ProbeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.operations.ProbeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.operations.ProbeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.operations.ProbeReply.displayName = 'proto.operations.ProbeReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.operations.ProbeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.operations.ProbeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.operations.ProbeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.operations.ProbeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    deviceHealthMap: (f = msg.getDeviceHealthMap()) ? f.toObject(includeInstance, undefined) : [],
    pendingTransactionsMap: (f = msg.getPendingTransactionsMap()) ? f.toObject(includeInstance, undefined) : [],
    requestDate: (f = msg.getRequestDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.operations.ProbeRequest}
 */
proto.operations.ProbeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.operations.ProbeRequest;
  return proto.operations.ProbeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.operations.ProbeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.operations.ProbeRequest}
 */
proto.operations.ProbeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeviceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 4:
      var value = msg.getDeviceHealthMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readEnum, null, 0, 0);
         });
      break;
    case 5:
      var value = msg.getPendingTransactionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readEnum, null, 0, 0);
         });
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.operations.ProbeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.operations.ProbeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.operations.ProbeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.operations.ProbeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDeviceHealthMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getPendingTransactionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeEnum);
  }
  f = message.getRequestDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 device_id = 1;
 * @return {number}
 */
proto.operations.ProbeRequest.prototype.getDeviceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double latitude = 2;
 * @return {number}
 */
proto.operations.ProbeRequest.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double longitude = 3;
 * @return {number}
 */
proto.operations.ProbeRequest.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * map<int32, DeviceStatus> device_health = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.operations.DeviceStatus>}
 */
proto.operations.ProbeRequest.prototype.getDeviceHealthMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.operations.DeviceStatus>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.clearDeviceHealthMap = function() {
  this.getDeviceHealthMap().clear();
  return this;};


/**
 * map<int64, TransactionStatus> pending_transactions = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.operations.TransactionStatus>}
 */
proto.operations.ProbeRequest.prototype.getPendingTransactionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.operations.TransactionStatus>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.clearPendingTransactionsMap = function() {
  this.getPendingTransactionsMap().clear();
  return this;};


/**
 * optional google.protobuf.Timestamp request_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.operations.ProbeRequest.prototype.getRequestDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.operations.ProbeRequest} returns this
*/
proto.operations.ProbeRequest.prototype.setRequestDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.operations.ProbeRequest} returns this
 */
proto.operations.ProbeRequest.prototype.clearRequestDate = function() {
  return this.setRequestDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.operations.ProbeRequest.prototype.hasRequestDate = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.operations.ProbeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.operations.ProbeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.operations.ProbeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.operations.ProbeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latestHotlist: jspb.Message.getFieldWithDefault(msg, 2, 0),
    registerDate: (f = msg.getRegisterDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.operations.ProbeReply}
 */
proto.operations.ProbeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.operations.ProbeReply;
  return proto.operations.ProbeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.operations.ProbeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.operations.ProbeReply}
 */
proto.operations.ProbeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestHotlist(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRegisterDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.operations.ProbeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.operations.ProbeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.operations.ProbeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.operations.ProbeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLatestHotlist();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRegisterDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 status = 1;
 * @return {number}
 */
proto.operations.ProbeReply.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.operations.ProbeReply} returns this
 */
proto.operations.ProbeReply.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 latest_hotlist = 2;
 * @return {number}
 */
proto.operations.ProbeReply.prototype.getLatestHotlist = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.operations.ProbeReply} returns this
 */
proto.operations.ProbeReply.prototype.setLatestHotlist = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp register_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.operations.ProbeReply.prototype.getRegisterDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.operations.ProbeReply} returns this
*/
proto.operations.ProbeReply.prototype.setRegisterDate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.operations.ProbeReply} returns this
 */
proto.operations.ProbeReply.prototype.clearRegisterDate = function() {
  return this.setRegisterDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.operations.ProbeReply.prototype.hasRegisterDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.operations.DeviceStatus = {
  UNKNOWN: 0,
  ACTIVE: 1,
  INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.operations.TransactionStatus = {
  CONFIRMED: 0,
  CANCELLED: 1
};

goog.object.extend(exports, proto.operations);