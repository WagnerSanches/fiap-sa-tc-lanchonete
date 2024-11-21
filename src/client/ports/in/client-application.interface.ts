import { CreateClientDto } from "src/client/dto/create-client.dto";
import { SearchClientDTO } from "src/client/dto/search-client.dto";
import { Client } from "src/client/entities/client.entity";

export interface ClienteApplication {
    create(client: Client): Promise<Client>;
    find(document: string): Promise<Client>;
    findAll(): Promise<Client[]>;
}