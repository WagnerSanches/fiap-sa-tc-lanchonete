import { ValueObject } from "./value-object";

export enum PaymentStatusValue {
    Declined = "DECLINED",
    Accepted = "ACCEPTED",
    Processing = "PROCESSING"
}

export class PaymentStatus extends ValueObject<PaymentStatusValue> {}