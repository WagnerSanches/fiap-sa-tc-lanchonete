import { Inject, Injectable } from '@nestjs/common';
import { ClienteApplication } from '../ports/in/client-application.interface';
import { Client } from '../entities/client.entity';
import { SearchClientDTO } from '../dto/search-client.dto';
import { ClientRepository } from '../ports/out/client-repository.interface';

@Injectable()
export class ClienteApplicationService implements ClienteApplication {
    constructor(@Inject('ClientRepositoryPrisma') private prismaRepository: ClientRepository) {}

    create(client: Client): Promise<Client> {
        return this.prismaRepository.create(client);
    }

    find(document: string): Promise<Client> {
        return this.prismaRepository.find(document);;
    }

    findAll(): Promise<Client[]> {
        return this.prismaRepository.findAll();
    }
}
