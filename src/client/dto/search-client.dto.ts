import { CreateClientDto } from "./create-client.dto";

export class SearchClientDTO {
    id: number;
    document: string;
    email?: string;
    name?: string;
}