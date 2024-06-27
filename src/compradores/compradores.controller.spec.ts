import { Test, TestingModule } from '@nestjs/testing';
import { CompradoresController } from './compradores.controller';
import { CompradoresService } from './compradores.service';

describe('CompradoresController', () => {
  let controller: CompradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompradoresController],
      providers: [CompradoresService],
    }).compile();

    controller = module.get<CompradoresController>(CompradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
