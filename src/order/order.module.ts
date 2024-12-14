import { Module } from '@nestjs/common';
import { OrderController } from './adapters/in/order.controller';
import { OrderApplicationService } from './application/order-application.service';
import { OrderRepositoryPrisma } from './adapters/out/order-repository.prisma';
import { PrismaService } from 'src/module/prisma';

@Module({
  controllers: [OrderController],
  providers: [PrismaService, OrderApplicationService, OrderRepositoryPrisma,
    {
      provide: 'OrderApplicationService',
      useExisting: OrderApplicationService
    },
    {
      provide: 'OrderRepositoryPrisma',
      useExisting: OrderRepositoryPrisma
    }]
})
export class OrderModule {}
