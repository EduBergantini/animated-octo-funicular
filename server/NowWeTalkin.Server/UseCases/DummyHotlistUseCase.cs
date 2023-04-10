namespace NowWeTalkin.Server.UseCases;

public class DummyHotlistUseCase
{
    private static readonly IEnumerable<HotListRecord> HotLists;
    public const int NoNewItem = 2;
    public const int FailedToFetch = -999;

    static DummyHotlistUseCase()
    {
        HotLists = FillHotlist().OrderBy(record => record.RegisterDate);
    }

    private static IEnumerable<HotListRecord> FillHotlist()
    {
        for (var i = 0; i < Random.Shared.NextInt64(1, 100000); i++)
        {
            yield return new(
                ++i,
                Random.Shared.Next(10, 99),
                Random.Shared.Next(1, 9),
                Convert.ToUInt32(Random.Shared.Next(1000, 9999)),
                Convert.ToByte(Random.Shared.Next(1, 3)),
                DateTimeOffset.Now.AddDays(-Random.Shared.Next(1, 10))
            );
        }
    }

    public static IEnumerable<HotListRecord> GetHotListFrom(long currentIndex)
        => HotLists.Where(record => record.Index > currentIndex);

    public static HotListRecord? GetHotListByIndex(long currentIndex)
        => HotLists.SingleOrDefault(record => record.Index + 1 == currentIndex);

    public static long GetLatestHotlistIndex() => HotLists.Last().Index;
}

public record struct HotListRecord
(
    long Index,
    int IssuerId,
    int CardDesignId,
    uint CardSerialNumber,
    byte Action,
    DateTimeOffset RegisterDate
);