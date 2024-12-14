import { Inject, Injectable } from '@nestjs/common';
import { JWT } from 'src/staff/entities/jwt.entity';
import { Staff } from 'src/staff/entities/staff.entity';
import { LoginApplication } from 'src/staff/ports/in/login-application.interface';
import { LoginRepository } from 'src/staff/ports/out/login-repository.interface';
import * as AWS from 'aws-sdk';
import { AwsService } from 'src/module/aws/aws.service';

@Injectable()
export class LoginApplicationService implements LoginApplication {
    private secretsManager: AWS.SecretsManager;

    constructor(@Inject('LoginRepositoryPrisma') private loginRepository: LoginRepository,
    private readonly secretsService: AwsService) {}
        
    authenticate(staff: Staff): JWT {
        this.loginRepository.findStaff(staff).then(rs => {

        });

        this.secretsService.getSecretValue("asdasdasd");
        return null;
    }
}

