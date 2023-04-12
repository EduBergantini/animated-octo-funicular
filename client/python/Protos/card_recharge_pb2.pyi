from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

CPF: DocumentType
DESCRIPTOR: _descriptor.FileDescriptor
RG: DocumentType
UNKNOWN: DocumentType

class CardRechargeReply(_message.Message):
    __slots__ = ["message", "status", "transaction_number"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TRANSACTION_NUMBER_FIELD_NUMBER: _ClassVar[int]
    message: str
    status: int
    transaction_number: int
    def __init__(self, status: _Optional[int] = ..., message: _Optional[str] = ..., transaction_number: _Optional[int] = ...) -> None: ...

class CardRechargeRequest(_message.Message):
    __slots__ = ["application_id", "card_design_id", "card_internal_serial_number", "card_serial_number", "document_number", "document_type", "issuer_id", "recharge_value_in_cents"]
    APPLICATION_ID_FIELD_NUMBER: _ClassVar[int]
    CARD_DESIGN_ID_FIELD_NUMBER: _ClassVar[int]
    CARD_INTERNAL_SERIAL_NUMBER_FIELD_NUMBER: _ClassVar[int]
    CARD_SERIAL_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DOCUMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    ISSUER_ID_FIELD_NUMBER: _ClassVar[int]
    RECHARGE_VALUE_IN_CENTS_FIELD_NUMBER: _ClassVar[int]
    application_id: int
    card_design_id: int
    card_internal_serial_number: int
    card_serial_number: int
    document_number: str
    document_type: DocumentType
    issuer_id: int
    recharge_value_in_cents: int
    def __init__(self, card_internal_serial_number: _Optional[int] = ..., issuer_id: _Optional[int] = ..., card_design_id: _Optional[int] = ..., card_serial_number: _Optional[int] = ..., application_id: _Optional[int] = ..., document_type: _Optional[_Union[DocumentType, str]] = ..., document_number: _Optional[str] = ..., recharge_value_in_cents: _Optional[int] = ...) -> None: ...

class DocumentType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
