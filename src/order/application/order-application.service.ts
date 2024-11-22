import { Inject, Injectable } from '@nestjs/common';
import { OrderApplication } from '../ports/in/order-application.interface';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../ports/out/order-repository.interface';
import { CreateOrder } from '../dto/create-order.dto';
import { OrderProgressValue } from '../entities/value-object/order-progress';
import { OrderStatus } from '../entities/order-status.entity';
import { Status } from '../entities/status.entity';

@Injectable()
export class OrderApplicationService implements OrderApplication {
    constructor(@Inject('OrderRepositoryPrisma') private orderRepository: OrderRepository) {}

    findAll(): Promise<Order[]> {
        return this.orderRepository.findAll();
    }

    findById(id_order: number): Promise<Order> {
        return this.orderRepository.findById(id_order);
    }
    
    create(order: CreateOrder): Promise<Order> {
        return this.orderRepository.create(new Order(order));
    }

    updateStatus(id_order: number, status: Status): Promise<OrderStatus> {
        return this.orderRepository.updateStatus(id_order, status);
    }

}
