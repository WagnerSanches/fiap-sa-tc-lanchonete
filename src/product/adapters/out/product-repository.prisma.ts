import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma";
import { Product } from "src/Product/entities/Product.entity";
import { ProductRepository } from "src/Product/ports/out/Product-repository.interface";

@Injectable()
export class ProductRepositoryPrisma implements ProductRepository {

    constructor(private prisma: PrismaService) {}

    create(product: Product): Promise<Product> {
        return this.prisma.product.create({
            data: product
        });
    }
    
    findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }
}