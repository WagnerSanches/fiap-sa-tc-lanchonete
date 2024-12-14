import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './module/prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { PrismaService } from './module/prisma';
import { OrderModule } from './order/order.module';
import { StaffModule } from './staff/staff.module';
import { AwsModule } from './module/aws/aws.module';

@Module({
  imports: [PrismaModule, ClientModule, OrderModule, StaffModule, AwsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
