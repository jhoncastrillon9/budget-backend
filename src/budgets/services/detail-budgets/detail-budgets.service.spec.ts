import { Test, TestingModule } from '@nestjs/testing';
import { DetailBudgetsService } from './detail-budgets.service';

describe('DetailBudgetsService', () => {
  let service: DetailBudgetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailBudgetsService],
    }).compile();

    service = module.get<DetailBudgetsService>(DetailBudgetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
