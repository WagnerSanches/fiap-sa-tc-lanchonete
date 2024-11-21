import { CreateClientDto } from "../dto/create-client.dto";

export class Client {
    id_client: number;
    document: string;
    name?: string;
    email?: string;

    constructor(
        createClientDTO: CreateClientDto
    ) {
        this.document = createClientDTO.document;
        this.name = createClientDTO.name;
        this.email = createClientDTO.email;
    }
}
