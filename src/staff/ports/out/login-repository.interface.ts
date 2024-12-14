import { Staff } from "src/staff/entities/staff.entity";

export interface LoginRepository {
        findStaff(staff: Staff): Promise<Staff>
}