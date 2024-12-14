import { Inject, Injectable } from '@nestjs/common';
import { JWT } from 'src/Product/entities/jwt.entity';
import { Product } from 'src/Product/entities/Product.entity';
import { ProductApplication } from 'src/Product/ports/in/Product-application.interface';
import { ProductRepository } from 'src/Product/ports/out/Product-repository.interface';
import * as AWS from 'aws-sdk';
import { AwsService } from 'src/module/aws/aws.service';

@Injectable()
export class ProductApplicationService implements ProductApplication {
    private secretsManager: AWS.SecretsManager;

    constructor(@Inject('ProductRepositoryPrisma') private productRepository: ProductRepository,
    private readonly secretsService: AwsService) {}

    findAll(): Promise<Product[]> {
        return this.findAll();
    }

    create(product: Product): Promise<Product> {
        return this.productRepository.create(product);
    }
}