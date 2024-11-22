import { CreateOrderItemDTO } from "../dto/create-order-item.dto";
import { Item } from "./item.entity";

export class OrderItems {
    id_order?: number;
    id_item?: number;
    item: Item;
    quantity: number;

    constructor(item: CreateOrderItemDTO) {
        this.item = item;
        this.quantity = item.quantity;
    }
}