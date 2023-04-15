import random
import time

import grpc

from src.generated.card_recharge_pb2 import CardRechargeRequest
from src.generated.card_recharge_pb2_grpc import CardRechargeServicer, CardRechargeStub


class CardRechargeClient(CardRechargeServicer):
    def __init__(self):
        self.host = 'localhost'
        self.port = 5240
        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.port))
        self.stub = CardRechargeStub(self.channel)

    def request_recharge_to_server(self):
        request_information = self.__get_fake_recharge_request()
        return self.stub.RequestRechargeUnary(request_information)

    def request_recharge_streaming(self):
        recharge_iterator = self.__get_recharge_request_iterator()
        for recharge_response in self.stub.RequestRechargeStream(recharge_iterator):
            print(recharge_response)

    def __get_recharge_request_iterator(self):
        while(True):
            wait_time = random.Random().randrange(1, 3)
            time.sleep(wait_time)
            yield self.__get_fake_recharge_request()

    def __get_fake_recharge_request(self):
        message = {
            'card_internal_serial_number': random.Random().randrange(1, 90000),
            'issuer_id': random.Random().randrange(1, 99),
            'card_design_id': random.Random().randrange(1, 9),
            'card_serial_number': random.Random().randrange(1, 9999),
            'application_id': random.Random().randrange(1, 950),
            'recharge_value_in_cents': random.Random().randrange(1, 5000),
        }

        return CardRechargeRequest(card_internal_serial_number=message['card_internal_serial_number'],
                            issuer_id=message['issuer_id'],
                            card_design_id=message['card_design_id'],
                            card_serial_number=message['card_serial_number'],
                            application_id=message['application_id'],
                            document_type=None,
                            document_number=None,
                            recharge_value_in_cents=message['recharge_value_in_cents'])
