import { OrderStatus } from "src/order/entities/order-status.entity";
import { Order } from "src/order/entities/order.entity";
import { Status } from "src/order/entities/status.entity";

export interface OrderRepository {
    findAll(): Promise<Order[]>
    findById(id_order: number): Promise<Order>;
    create(order: Order): Promise<Order>;
    updateStatus(id_order: number, status: Status): Promise<OrderStatus>;
}