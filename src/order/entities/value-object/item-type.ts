import { ValueObject } from "./value-object";

export enum ItemTypeValue {
    Drink = "DRINK",
    Dessert = "DESSERT",
    Snack = "SNACK"
}

export class ItemType extends ValueObject<ItemTypeValue> {}