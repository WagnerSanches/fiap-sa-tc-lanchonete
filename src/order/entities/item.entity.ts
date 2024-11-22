import { Decimal } from "@prisma/client/runtime/library";
import { ItemType } from "./value-object/item-type";

export class Item {
    id_item?: number;
    name: string;
    description: string;
    type: string; // tem que criar uma tabela pra guardar os tipos aqui
    cook_time_min: number;
    price: Decimal;
}