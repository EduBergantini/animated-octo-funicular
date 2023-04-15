import grpc

from src.generated.hotlist_pb2 import HotlistRequest
from src.generated.hotlist_pb2_grpc import HotlistServicer, HotlistStub


class HotListClient(HotlistServicer):
    def __init__(self):
        self.host = 'localhost'
        self.port = 5240
        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.port))
        self.stub = HotlistStub(self.channel)

    def request_next_hotlist_item(self):
        request_information = self.__get_hotlist_request()
        return self.stub.RequestHotlistUnary(request_information)

    def request_hotlist_streaming(self):
        for recharge_response in self.stub.RequestHotlistServerStream(self.__get_hotlist_request()):
            print(recharge_response)

    def __get_hotlist_request(self):
        return HotlistRequest(index=1)
