import { Product } from "src/Product/entities/Product.entity";

export interface ProductRepository {
        findAll(): Promise<Product[]>;
        create(Product: Product): Promise<Product>;
}