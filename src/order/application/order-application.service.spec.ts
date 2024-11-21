import { Test, TestingModule } from '@nestjs/testing';
import { OrderApplicationService } from './order-application.service';

describe('OrderApplicationService', () => {
  let service: OrderApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderApplicationService],
    }).compile();

    service = module.get<OrderApplicationService>(OrderApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
