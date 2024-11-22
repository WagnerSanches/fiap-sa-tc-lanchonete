import { ValueObject } from "./value-object";

export enum OrderProgressValue {
    Received = "RECEIVED",
    In_process = "IN_PROCESS",
    Ready = "READY",
    Finished = "FINISHED",
    Canceled = "CANCELED"
}

export class OrderProgress extends ValueObject<OrderProgressValue> {}