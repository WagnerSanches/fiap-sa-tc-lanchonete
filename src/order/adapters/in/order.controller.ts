import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { CreateOrder } from 'src/order/dto/create-order.dto';
import { FindOrderDTO } from 'src/order/dto/find-order.dto';
import { Order } from 'src/order/entities/order.entity';
import { Status } from 'src/order/entities/status.entity';
import { UpdateStatusDTO } from 'src/order/entities/update-status.entity';
import { OrderApplication } from 'src/order/ports/in/order-application.interface';
import { OrderRepository } from 'src/order/ports/out/order-repository.interface';

@Controller('orders')
export class OrderController {

    constructor(@Inject('OrderApplicationService') private orderApplication: OrderApplication) {}

    @Get()
    findAll() {
        return this.orderApplication.findAll();
    }

    @Get(':id_order')
    findById(@Param() findOrderDTO: FindOrderDTO) {
        return this.orderApplication.findById(parseInt(findOrderDTO.id_order));
    }

    @Post()
    create(@Body() createOrder: CreateOrder) {
        return this.orderApplication.create(createOrder);
    }

    @Put(':id_order/status')
    updateStatus(@Param() findOrderDTO: FindOrderDTO, @Body() status: Status) {
        return this.orderApplication.updateStatus(parseInt(findOrderDTO.id_order), status);
    }

    @Post()
    updatePayment() {

    } // WEBHOOK
}
