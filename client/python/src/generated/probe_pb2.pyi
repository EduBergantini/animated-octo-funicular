from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

CANCELLED: TransactionStatus
CONFIRMED: TransactionStatus
DESCRIPTOR: _descriptor.FileDescriptor
DEVICE_STATUS_ACTIVE: DeviceStatus
DEVICE_STATUS_INACTIVE: DeviceStatus
DEVICE_STATUS_UNKNOWN: DeviceStatus

class ProbeReply(_message.Message):
    __slots__ = ["latest_hotlist", "register_date", "status"]
    LATEST_HOTLIST_FIELD_NUMBER: _ClassVar[int]
    REGISTER_DATE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    latest_hotlist: int
    register_date: _timestamp_pb2.Timestamp
    status: int
    def __init__(self, status: _Optional[int] = ..., latest_hotlist: _Optional[int] = ..., register_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class ProbeRequest(_message.Message):
    __slots__ = ["device_health", "device_id", "latitude", "longitude", "pending_transactions", "request_date"]
    class DeviceHealthEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: int
        value: DeviceStatus
        def __init__(self, key: _Optional[int] = ..., value: _Optional[_Union[DeviceStatus, str]] = ...) -> None: ...
    class PendingTransactionsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: int
        value: TransactionStatus
        def __init__(self, key: _Optional[int] = ..., value: _Optional[_Union[TransactionStatus, str]] = ...) -> None: ...
    DEVICE_HEALTH_FIELD_NUMBER: _ClassVar[int]
    DEVICE_ID_FIELD_NUMBER: _ClassVar[int]
    LATITUDE_FIELD_NUMBER: _ClassVar[int]
    LONGITUDE_FIELD_NUMBER: _ClassVar[int]
    PENDING_TRANSACTIONS_FIELD_NUMBER: _ClassVar[int]
    REQUEST_DATE_FIELD_NUMBER: _ClassVar[int]
    device_health: _containers.ScalarMap[int, DeviceStatus]
    device_id: int
    latitude: float
    longitude: float
    pending_transactions: _containers.ScalarMap[int, TransactionStatus]
    request_date: _timestamp_pb2.Timestamp
    def __init__(self, device_id: _Optional[int] = ..., latitude: _Optional[float] = ..., longitude: _Optional[float] = ..., device_health: _Optional[_Mapping[int, DeviceStatus]] = ..., pending_transactions: _Optional[_Mapping[int, TransactionStatus]] = ..., request_date: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class DeviceStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []

class TransactionStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
