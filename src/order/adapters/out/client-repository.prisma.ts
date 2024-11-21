import { Injectable } from "@nestjs/common";
import { Client } from "src/client/entities/client.entity";
import { ClientRepository } from "src/client/ports/out/client-repository.interface";
import { PrismaService } from "src/module/prisma";
import { Order } from "src/order/entities/order.entity";
import { OrderRepository } from "src/order/ports/out/order-repository.interface";

@Injectable()
export class OrderRepositoryPrisma implements OrderRepository {
    constructor(private prisma: PrismaService) {}

    create(order: Order): Promise<{id_order:number}> {
        return this.prisma.orders.create({
            data: {
                id_payment: 1,
                status: order.status.getValue(),
                document: order.document,
                price: order.price,
                quantity_items: order.quantity_items,
                items: {
                    create: order.items.map((item) => ({
                        id_item: item.id_item
                    }))
                }
            },
            select: {
                id_order: true,
              },
        });
    }
}
  