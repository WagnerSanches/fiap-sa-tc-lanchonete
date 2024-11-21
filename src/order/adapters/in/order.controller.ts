import { Body, Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { CreateOrder } from 'src/order/dto/create-order.dto';
import { Order } from 'src/order/entities/order.entity';
import { OrderApplication } from 'src/order/ports/in/order-application.interface';
import { OrderRepository } from 'src/order/ports/out/order-repository.interface';

@Controller('order')
export class OrderController {

    constructor(@Inject('OrderApplicationService') private orderApplication: OrderApplication) {}

    @Get()
    findAll() {

    }

    @Get(':id_order')
    findById() {

    }

    @Post()
    create(@Body() createOrder: CreateOrder) {
        return this.orderApplication.create(new Order(createOrder));
    }

    @Put(':/id_order/status')
    updateStatus() {

    }

    @Post()
    updatePayment() {

    } // nao é aqui
}
