import { ItemType } from "./value-object/item-type";

export class Item {
    id_item?: number;
    name: string;
    description: string;
    type: ItemType;
    cooking_time: string;
    price: number;
}