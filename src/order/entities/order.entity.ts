import { item } from "@prisma/client";
import { CreateOrder } from "../dto/create-order.dto";
import { Item } from "./item.entity";
import { Payment } from "./payment.entity";
import { OrderStatus, OrderStatusValue } from "./value-object/order-status";
import { PaymentStatus, PaymentStatusValue } from "./value-object/payment-status";

export class Order {
    id_order?: number;
    payment: Payment;
    status: OrderStatus;
    document: string;
    price: number;
    quantity_items: number;
    created_at: string;
    updated_at: string;
    items?: Item[];

    constructor(createOrder: CreateOrder) {
        this.payment = null;
        this.status = new OrderStatus(OrderStatusValue.In_process);
        this.document = createOrder.document;
        this.price = createOrder.items.reduce((total, item) => total + item.price, 0);
        this.quantity_items = createOrder.items.length;
        this.items = createOrder.items;
    }
}