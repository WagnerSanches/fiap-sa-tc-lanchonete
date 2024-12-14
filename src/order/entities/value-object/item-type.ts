import { ValueObject } from "./value-object";

export enum ProductTypeValue {
    Drink = "DRINK",
    Dessert = "DESSERT",
    Snack = "SNACK"
}

export class ProductType extends ValueObject<ProductTypeValue> {}