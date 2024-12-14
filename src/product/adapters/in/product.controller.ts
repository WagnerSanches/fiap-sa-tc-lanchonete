import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Product } from 'src/Product/entities/Product.entity';
import { ProductApplication } from 'src/Product/ports/in/Product-application.interface';

@Controller('Product')
export class ProductController {

    constructor(@Inject('ProductApplicationService') private ProductApplication: ProductApplication) {}

    @Get()
    findAll() {
        return this.ProductApplication.findAll();
    }

    @Post()
    Product(@Body() Product: Product) {
        return this.ProductApplication.create(Product);
    }

}
