import { Injectable } from "@nestjs/common";
import { Decimal } from "@prisma/client/runtime/library";
import { Client } from "src/client/entities/client.entity";
import { ClientRepository } from "src/client/ports/out/client-repository.interface";
import { PrismaService } from "src/module/prisma";
import { OrderStatus } from "src/order/entities/order-status.entity";
import { Order } from "src/order/entities/order.entity";
import { Status } from "src/order/entities/status.entity";
import { OrderRepository } from "src/order/ports/out/order-repository.interface";

@Injectable()
export class OrderRepositoryPrisma implements OrderRepository {

    private readonly STATUS_RECEIVED = 1;

    constructor(private prisma: PrismaService) {}

    findAll(): Promise<Order[]> {
        return this.prisma.orders.findMany({
            where: {
                orderstatus: {
                    id_status: {
                        in: [1, 2, 3]
                    }
                }
            },
            orderBy: {
                orderstatus: {
                    id_status: {
                        sort: "desc"
                    }
                },
                created_at: {
                    sort: "desc"
                }
            },
            include: {
                orderproducts: {
                    select: {
                        product: true,
                        quantity: true
                    }
                },
                orderstatus: {
                    select: {
                        status: true,
                        id_order: true,
                        updated_at: true,
                        id_order_status: true
                    }
                }
            }
        })
    }

    findById(id_order: number): Promise<Order> {
        return this.prisma.orders.findUnique({
            where: {
                id_order: id_order,
            },
            include: {
                orderproducts: {
                    select: {
                        product: true,
                        quantity: true
                    }
                },
                orderstatus: {
                    select: {
                        status: true,
                        id_order: true,
                        updated_at: true,
                        id_order_status: true
                    }
                }
            }
        })
    }

    create(order: Order): Promise<Order> {
        return this.prisma.orders.create({
            data: {
                document: order.document,
                price: order.price,
                preparation_time: order.preparation_time,
                orderproducts: {
                    create: order.products.map((order_item) => ({
                        id_product: order_item.product.id_product,
                        quantity: order_item.quantity
                    }
                )),
                },
                orderstatus: {
                    create: {
                        status: {
                            connect: {
                                id_status: this.STATUS_RECEIVED
                            }
                        }
                    },
                }
            },
            include: {
                orderproducts: {
                    select: {
                        product: true,
                        quantity: true
                    }
                },
                orderstatus: {
                    select: {
                        status: true,
                        id_order: true,
                        updated_at: true,
                        id_order_status: true
                    }
                }
            }
        });
    }

    updateStatus(id_order: number, status: Status): Promise<OrderStatus> {
        return this.prisma.orderstatus.update({
            data: {
                id_status: parseInt(status.id_status.toString()),
                updated_at: new Date()
            },
            where: {
                id_order: id_order
            },
            select: {
                id_order_status: true,
                id_order: true,
                status: true,
                updated_at: true,
            }
        })
    }
}