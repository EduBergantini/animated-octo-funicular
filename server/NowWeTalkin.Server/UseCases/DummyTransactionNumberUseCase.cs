namespace NowWeTalkin.Server.UseCases;

public class DummyTransactionNumberUseCase
{
    private static ulong _transactionNumber;

    static DummyTransactionNumberUseCase()
    {
        _transactionNumber = 0L;
    }

    public static ulong GetNext() => ++_transactionNumber;
}