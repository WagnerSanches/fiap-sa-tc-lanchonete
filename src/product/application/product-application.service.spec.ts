import { Test, TestingModule } from '@nestjs/testing';
import { ProductApplicationService } from './product-application.service';

describe('ProductApplicationService', () => {
  let service: ProductApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductApplicationService],
    }).compile();

    service = module.get<ProductApplicationService>(ProductApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
