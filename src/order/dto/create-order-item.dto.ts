import { Item } from "../entities/item.entity"

export class CreateOrderItemDTO extends Item {
    quantity: number;
}