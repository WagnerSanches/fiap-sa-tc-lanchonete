import { Status } from "./status.entity";
import { OrderProgressValue } from "./value-object/order-progress";

export class OrderStatus {
  id_order_status?: number
  id_order: number;
  updated_at: Date;
  status: Status;
}