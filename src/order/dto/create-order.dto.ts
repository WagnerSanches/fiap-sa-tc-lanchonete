import { Item } from "../entities/item.entity";

export class CreateOrder {
    document: string;
    items: Item[];
}