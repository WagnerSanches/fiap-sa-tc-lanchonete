import { Module } from '@nestjs/common';
import { ProductController } from './adapters/in/product.controller';
import { ProductApplicationService } from './application/product-application.service';
import { AwsService } from 'src/module/aws/aws.service';

@Module({
  controllers: [ProductController],
  providers: [ProductApplicationService, AwsService]
})
export class ProductModule {}
