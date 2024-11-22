import { item, Prisma } from "@prisma/client";
import { CreateOrder } from "../dto/create-order.dto";
import { Item } from "./item.entity";
import { Payment } from "./payment.entity";
import { PaymentStatus, PaymentStatusValue } from "./value-object/payment-status";
import { OrderItems } from "./order-items.entity";
import { Decimal } from "@prisma/client/runtime/library";
import { OrderStatus } from "./order-status.entity";
import { OrderProgress, OrderProgressValue } from "./value-object/order-progress";


export class Order {
    id_order?: number;
    document: string;
    price: Decimal;
    preparation_time: string;
    created_at: Date;
    items?: OrderItems[];
    orderstatus: OrderStatus;

    constructor(createOrder: CreateOrder) {
        this.document = createOrder.document;
        this.price = new Decimal(0);
        createOrder.items.forEach((item) => {
            this.price = this.price.plus(item.price);
        });
        this.preparation_time = createOrder.items.reduce((time, item) => time += item.cook_time_min, 0) + " MINUTES";

        this.items = createOrder.items.map((item) => new OrderItems(item));
    }
}