import { Product } from "../entities/product.entity"

export class CreateOrderProductsDTO extends Product {
    quantity: number;
}