from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor
INSERT: HotlistAction
REMOVE: HotlistAction
UPDATE: HotlistAction

class HotlistReply(_message.Message):
    __slots__ = ["action", "card_design_id", "card_serial_number", "index", "issuer_id", "register_date", "status"]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    CARD_DESIGN_ID_FIELD_NUMBER: _ClassVar[int]
    CARD_SERIAL_NUMBER_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    ISSUER_ID_FIELD_NUMBER: _ClassVar[int]
    REGISTER_DATE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    action: HotlistAction
    card_design_id: int
    card_serial_number: int
    index: int
    issuer_id: int
    register_date: _timestamp_pb2.Timestamp
    status: int
    def __init__(self, status: _Optional[int] = ..., index: _Optional[int] = ..., issuer_id: _Optional[int] = ..., card_design_id: _Optional[int] = ..., card_serial_number: _Optional[int] = ..., action: _Optional[_Union[HotlistAction, str]] = ..., register_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class HotlistRequest(_message.Message):
    __slots__ = ["index"]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    index: int
    def __init__(self, index: _Optional[int] = ...) -> None: ...

class HotlistAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
