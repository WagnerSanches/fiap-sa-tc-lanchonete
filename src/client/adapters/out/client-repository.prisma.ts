import { Injectable } from "@nestjs/common";
import { Client } from "src/client/entities/client.entity";
import { ClientRepository } from "src/client/ports/out/client-repository.interface";
import { PrismaService } from "src/module/prisma";

@Injectable()
export class ClientRepositoryPrisma implements ClientRepository {
    constructor(private prisma: PrismaService) {}

    find(document: string): Promise<Client> {
        return this.prisma.client.findUnique({
            where: { document }
        })
    }

    findAll(): Promise<Client[]> {
        return this.prisma.client.findMany();
    }

    create(client: Client): Promise<Client> {
        return this.prisma.client.create({
            data: client
        });
    }
}
  