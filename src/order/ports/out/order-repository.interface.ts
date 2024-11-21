import { Order } from "src/order/entities/order.entity";

export interface OrderRepository {
    create(order: Order): Promise<{id_order:number}>;
}