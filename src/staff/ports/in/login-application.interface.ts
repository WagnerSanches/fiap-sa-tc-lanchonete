import { JWT } from "src/staff/entities/jwt.entity";
import { Staff } from "src/staff/entities/staff.entity";

export interface LoginApplication {
    authenticate(staff: Staff): JWT;
}