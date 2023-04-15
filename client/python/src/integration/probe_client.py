import random
import time

import grpc

from src.generated.probe_pb2 import ProbeRequest, DEVICE_STATUS_ACTIVE, DEVICE_STATUS_INACTIVE
from src.generated.probe_pb2_grpc import ProbeServicer, ProbeStub


class ProbeClient(ProbeServicer):
    def __init__(self):
        self.host = 'localhost'
        self.port = 5240
        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.port))
        self.stub = ProbeStub(self.channel)

    def send_probe_information(self):
        request = self.__get_probe_request()
        return self.stub.SendProbeUnary(request)

    def send_probe_information_streaming(self):
        self.stub.SendProbeClientStream(self.__get_probe_information_iterator())

    def __get_probe_information_iterator(self):
        while(True):
            wait_time = random.Random().randrange(1, 3)
            time.sleep(wait_time)
            yield self.__get_probe_request()

    def __get_probe_request(self):
        device_health = dict()
        device_health[random.Random().randrange(0, 4)] = DEVICE_STATUS_ACTIVE
        device_health[random.Random().randrange(0, 4)] = DEVICE_STATUS_INACTIVE

        import datetime
        from google.protobuf.timestamp_pb2 import Timestamp

        t = datetime.datetime.now().timestamp()
        seconds = int(t)
        nanos = int(t % 1 * 1e9)

        proto_timestamp = Timestamp(seconds=seconds, nanos=nanos)

        return ProbeRequest(device_id=random.Random().randrange(1000, 999999),
                            latitude=random.Random().uniform(-122, 90),
                            longitude=random.Random().uniform(-122, 90),
                            device_health=device_health,
                            pending_transactions=None,
                            request_date=proto_timestamp)
