import { Injectable } from "@nestjs/common";
import { Staff } from "src/staff/entities/staff.entity";
import { LoginRepository } from "src/staff/ports/out/login-repository.interface";

@Injectable()
export class StaffRepositoryPrisma implements LoginRepository {

    findStaff(staff: Staff): Promise<Staff> {
        return null;
    }
    
}