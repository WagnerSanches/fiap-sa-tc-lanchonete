import { Body, Controller, Get, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/module/auth/jwt-auth.guard';
import { Product } from 'src/Product/entities/Product.entity';
import { ProductApplication } from 'src/Product/ports/in/Product-application.interface';

@Controller('Product')
export class ProductController {

    constructor(@Inject('ProductApplicationService') private ProductApplication: ProductApplication) {}

    @Get()
    findAll() {
        return this.ProductApplication.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    Product(@Request() req, @Body() Product: Product) {
        return this.ProductApplication.create(Product);
    }

}
