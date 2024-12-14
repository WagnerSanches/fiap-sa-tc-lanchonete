import { CreateOrderProductsDTO } from "../dto/create-order-product.dto";
import { Product } from "./product.entity";


export class OrderProducts {
    id_order?: number;
    id_product?: number;
    product: Product;
    quantity: number;

    constructor(product: CreateOrderProductsDTO) {
        this.product = product;
        this.quantity = product.quantity;
    }
}