import { CreateOrder } from "src/order/dto/create-order.dto";
import { Order } from "src/order/entities/order.entity";

export interface OrderApplication {
    create(order: Order): Promise<{id_order:number}>
}