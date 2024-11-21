import { ValueObject } from "./value-object";

export enum OrderStatusValue {
    Received = "RECEIVED",
    In_process = "IN_PROCESS",
    Ready = "READY",
    Finished = "FINISHED",
    Canceled = "CANCELED"
}

export class OrderStatus extends ValueObject<OrderStatusValue> {}