import { Test, TestingModule } from '@nestjs/testing';
import { PlanoContasController } from './plano-contas.controller';

describe('PlanoContasController', () => {
  let controller: PlanoContasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoContasController],
    }).compile();

    controller = module.get<PlanoContasController>(PlanoContasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
