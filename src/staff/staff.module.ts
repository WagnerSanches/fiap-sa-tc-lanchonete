import { Module } from '@nestjs/common';
import { LoginController } from './adapters/in/login.controller';
import { LoginApplicationService } from './application/login-application.service';
import { AwsService } from 'src/module/aws/aws.service';

@Module({
  controllers: [LoginController],
  providers: [LoginApplicationService, AwsService]
})
export class StaffModule {}
