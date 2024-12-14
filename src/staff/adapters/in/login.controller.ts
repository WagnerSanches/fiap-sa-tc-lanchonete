import { Body, Controller, Inject, Post } from '@nestjs/common';
import { JWT } from 'src/staff/entities/jwt.entity';
import { Staff } from 'src/staff/entities/staff.entity';
import { LoginApplication } from 'src/staff/ports/in/login-application.interface';

@Controller('login')
export class LoginController {

    constructor(@Inject('LoginApplicationService') private loginApplication: LoginApplication) {}

    @Post()
    Login(@Body() staff: Staff): JWT {
        return this.loginApplication.authenticate(staff)
    }


}
