import { CreateOrder } from "src/order/dto/create-order.dto";
import { OrderStatus } from "src/order/entities/order-status.entity";
import { Order } from "src/order/entities/order.entity";
import { Status } from "src/order/entities/status.entity";

export interface OrderApplication {
    findAll(): Promise<Order[]>;
    findById(id_order: number): Promise<Order>;
    create(order: CreateOrder): Promise<Order>;
    updateStatus(id_order: number, status: Status): Promise<OrderStatus>
}