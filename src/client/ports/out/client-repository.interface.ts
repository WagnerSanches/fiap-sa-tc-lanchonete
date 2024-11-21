import { Client } from "src/client/entities/client.entity";

export interface ClientRepository {
    findAll(): Promise<Client[]>;
    create(client: Client): Promise<Client>;
    find(document: string): Promise<Client>;
}