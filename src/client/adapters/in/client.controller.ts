import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { Client } from 'src/client/entities/client.entity';
import { ClienteApplication } from 'src/client/ports/in/client-application.interface';

@Controller('clients')
export class ClientController {

    constructor(@Inject('ClienteApplicationService') private clientRepository: ClienteApplication) {}

    @Get() 
    retrieveClients(@Param('document') document: string) {
        return this.clientRepository.findAll();
    }

    @Get(':document') 
    findClient(@Param('document') document: string) {
        return this.clientRepository.find(document);
    }

    @Post() 
    createClient(@Body() createClientDTO: CreateClientDto) {
        return this.clientRepository.create(new Client(createClientDTO))
    }

}
