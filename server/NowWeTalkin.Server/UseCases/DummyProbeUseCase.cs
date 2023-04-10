using System.Collections.Concurrent;
using NowWeTalkin.Server.Grpc;

namespace NowWeTalkin.Server.UseCases;

public class DummyProbeUseCase
{
    private static readonly ConcurrentBag<Device> ProbeHistories;

    static DummyProbeUseCase()
    {
        ProbeHistories = new ConcurrentBag<Device>();
    }

    public static Task MergeProbeHistory(ProbeRequest request)
    {
        if (ProbeHistories.Any(device => device.DeviceId == request.DeviceId))
        {
            var currentDevice = ProbeHistories.Single(device => device.DeviceId == request.DeviceId);
            currentDevice.Probes.Add(new DeviceProbe
            (
                request.Latitude,
                request.Longitude,
                request.DeviceHealth.ToDictionary(pair =>
                    new KeyValuePair<Peripherical, PeriphericalStatus>((Peripherical)pair.Key,
                        (PeriphericalStatus)pair.Value)),
                request.PendingTransactions.ToDictionary(pair =>
                    new KeyValuePair<long, RechargeStatus>(pair.Key, (RechargeStatus)pair.Value)),
                request.RequestDate.ToDateTimeOffset()
            ));
        }
        else
        {
            ConcurrentBag<DeviceProbe> deviceProbes = new()
            {
                new DeviceProbe
                (
                    request.Latitude,
                    request.Longitude,
                    request.DeviceHealth.ToDictionary(pair =>
                        new KeyValuePair<Peripherical, PeriphericalStatus>((Peripherical)pair.Key,
                            (PeriphericalStatus)pair.Value)),
                    request.PendingTransactions.ToDictionary(pair =>
                        new KeyValuePair<long, RechargeStatus>(pair.Key, (RechargeStatus)pair.Value)),
                    request.RequestDate.ToDateTimeOffset()
                )
            };
            var device = new Device(request.DeviceId, deviceProbes);
            ProbeHistories.Add(device);
        }

        return Task.CompletedTask;
    }
}

public record Device
(
    int DeviceId,
    ConcurrentBag<DeviceProbe> Probes
);

public record struct DeviceProbe
(
    double Latitude,
    double Longitude,
    Dictionary<KeyValuePair<Peripherical, PeriphericalStatus>, KeyValuePair<int, DeviceStatus>> DeviceHealth,
    Dictionary<KeyValuePair<long, RechargeStatus>, KeyValuePair<long, TransactionStatus>> Transactions,
    DateTimeOffset RegisterDate
);

public enum PeriphericalStatus
{
    UNKNOWN = 0,
    ACTIVE = 1,
    INACTIVE = 2,
}

public enum Peripherical
{
    MIFARE,
    EMV,
    GPRS,
    WIFI
}

public enum RechargeStatus
{
    CONFIRMED = 0,
    CANCELLED = 1,
}