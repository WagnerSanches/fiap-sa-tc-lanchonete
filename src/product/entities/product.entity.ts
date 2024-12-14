import Decimal from "decimal.js";

export class Product {
    id_product?: number;
    name: string;
    description: string;
    type: string; // tem que criar uma tabela pra guardar os tipos aqui
    cook_time_min: number;
    price: Decimal;
}