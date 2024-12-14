import { JWT } from "src/Product/entities/jwt.entity";
import { Product } from "src/Product/entities/Product.entity";

export interface ProductApplication {
    findAll(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
}