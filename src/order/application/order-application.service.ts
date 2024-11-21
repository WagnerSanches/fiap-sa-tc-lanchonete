import { Inject, Injectable } from '@nestjs/common';
import { OrderApplication } from '../ports/in/order-application.interface';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../ports/out/order-repository.interface';

@Injectable()
export class OrderApplicationService implements OrderApplication {
    constructor(@Inject('OrderRepositoryPrisma') private orderRepository: OrderRepository) {}
    
    create(order: Order): Promise<{id_order:number}> {
        return this.orderRepository.create(order);
    }
}
