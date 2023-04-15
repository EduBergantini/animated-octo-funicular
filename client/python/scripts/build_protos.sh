#!/bin/bash

PROTO_DEST=./src/generated
PROTO_SRC=./protos

mkdir -p ${PROTO_DEST}

# Python code generation
python -m grpc_tools.protoc \
  -I=${PROTO_SRC} \
  --python_out=${PROTO_DEST} \
  --pyi_out=${PROTO_DEST} \
  --grpc_python_out=${PROTO_DEST} \
  ${PROTO_SRC}/card_recharge.proto

python -m grpc_tools.protoc \
  -I=${PROTO_SRC} \
  --python_out=${PROTO_DEST} \
  --pyi_out=${PROTO_DEST} \
  --grpc_python_out=${PROTO_DEST} \
  ${PROTO_SRC}/hotlist.proto

python -m grpc_tools.protoc \
  -I=${PROTO_SRC} \
  --python_out=${PROTO_DEST} \
  --pyi_out=${PROTO_DEST} \
  --grpc_python_out=${PROTO_DEST} \
  ${PROTO_SRC}/probe.proto