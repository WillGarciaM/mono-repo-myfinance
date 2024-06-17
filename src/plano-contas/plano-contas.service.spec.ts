import { Test, TestingModule } from '@nestjs/testing';
import { PlanoContasService } from './plano-contas.service';

describe('PlanoContasService', () => {
  let service: PlanoContasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanoContasService],
    }).compile();

    service = module.get<PlanoContasService>(PlanoContasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
