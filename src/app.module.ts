import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './module/prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { PrismaService } from './module/prisma';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, ClientModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
