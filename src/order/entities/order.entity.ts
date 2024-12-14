import { CreateOrder } from "../dto/create-order.dto";
import { Payment } from "./payment.entity";
import { PaymentStatus, PaymentStatusValue } from "./value-object/payment-status";
import { Decimal } from "@prisma/client/runtime/library";
import { OrderStatus } from "./order-status.entity";
import { OrderProgress, OrderProgressValue } from "./value-object/order-progress";
import { OrderProducts } from "./order-products.entity";


export class Order {
    id_order?: number;
    document: string;
    price: Decimal;
    preparation_time: string;
    created_at: Date;
    products?: OrderProducts[];
    orderstatus: OrderStatus;

    constructor(createOrder: CreateOrder) {
        this.document = createOrder.document;
        this.price = new Decimal(0);
        createOrder.items.forEach((item) => {
            this.price = this.price.plus(item.price);
        });
        this.preparation_time = createOrder.items.reduce((time, item) => time += item.cook_time_min, 0) + " MINUTES";

        this.products = createOrder.items.map((item) => new OrderProducts(item));
    }
}