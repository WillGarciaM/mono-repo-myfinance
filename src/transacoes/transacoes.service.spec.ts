import { Test, TestingModule } from '@nestjs/testing';
import { TransacoesService } from './transacoes.service';

describe('TransacoesService', () => {
  let service: TransacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransacoesService],
    }).compile();

    service = module.get<TransacoesService>(TransacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
