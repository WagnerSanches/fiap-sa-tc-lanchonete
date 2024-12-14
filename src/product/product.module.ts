import { Module } from '@nestjs/common';
import { ProductController } from './adapters/in/product.controller';
import { ProductApplicationService } from './application/product-application.service';

@Module({
  controllers: [ProductController],
  providers: [ProductApplicationService]
})
export class ProductModule {}
