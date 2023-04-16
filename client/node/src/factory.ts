import { CardRechargeRequest } from "./protos/card_recharge_pb";

export const makeRechargeRequest = (): CardRechargeRequest => {
    const rechargeRequest = new CardRechargeRequest();
    rechargeRequest.setCardInternalSerialNumber(Math.floor(Math.random() * 90000));
    rechargeRequest.setIssuerId(Math.floor(Math.random() * 9));
    rechargeRequest.setCardDesignId(Math.floor(Math.random() * 90000));
    rechargeRequest.setCardSerialNumber(Math.floor(Math.random() * 9999));
    rechargeRequest.setApplicationId(Math.floor(Math.random() * 950));
    rechargeRequest.setRechargeValueInCents(Math.floor(Math.random() * 50000));
    return rechargeRequest;
};
