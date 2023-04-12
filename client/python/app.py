import random
import grpc
import Protos.card_recharge_pb2_grpc as pb2_grpc
import Protos.card_recharge_pb2 as pb2


class UnaryCardRechargeClient(pb2_grpc.CardRechargeServicer):
    def __init__(self):
        self.host = 'localhost'
        self.port = 5240
        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.port))
        self.stub = pb2_grpc.CardRechargeStub(self.channel)

    def request_recharge_to_server(self):
        request_information = {
            'card_internal_serial_number': random.Random().randrange(1, 90000),
            'issuer_id': random.Random().randrange(1, 99),
            'card_design_id': random.Random().randrange(1, 9),
            'card_serial_number': random.Random().randrange(1, 9999),
            'application_id': random.Random().randrange(1, 950),
            'recharge_value_in_cents': random.Random().randrange(1, 50000),
        }
        message = pb2.CardRechargeRequest(card_internal_serial_number=request_information['card_internal_serial_number'],
                                          issuer_id=request_information['issuer_id'],
                                          card_design_id=request_information['card_design_id'],
                                          card_serial_number=request_information['card_serial_number'],
                                          application_id=request_information['application_id'],
                                          document_type=None,
                                          document_number=None,
                                          recharge_value_in_cents=request_information['recharge_value_in_cents'])
        return self.stub.RequestRechargeUnary(message)


if __name__ == '__main__':
    client = UnaryCardRechargeClient()
    result = client.request_recharge_to_server()
    print(f'{result}')
