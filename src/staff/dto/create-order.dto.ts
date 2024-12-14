import { Item } from "../entities/item.entity";
import { CreateOrderItemDTO } from "./create-order-item.dto";

export class CreateOrder {
    document: string;
    items: CreateOrderItemDTO[];
}