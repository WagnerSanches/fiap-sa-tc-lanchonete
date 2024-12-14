import { Product } from "../entities/product.entity";
import { CreateOrderProductsDTO } from "./create-order-product.dto";

export class CreateOrder {
    document: string;
    items: CreateOrderProductsDTO[];
}