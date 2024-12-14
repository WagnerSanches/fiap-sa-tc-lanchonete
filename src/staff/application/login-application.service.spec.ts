import { Test, TestingModule } from '@nestjs/testing';
import { LoginApplicationService } from './login-application.service';

describe('LoginApplicationService', () => {
  let service: LoginApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginApplicationService],
    }).compile();

    service = module.get<LoginApplicationService>(LoginApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
