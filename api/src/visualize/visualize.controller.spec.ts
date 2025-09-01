import { Test, TestingModule } from '@nestjs/testing';
import { VisualizeController } from './visualize.controller';

describe('VisualizeController', () => {
  let controller: VisualizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisualizeController],
    }).compile();

    controller = module.get<VisualizeController>(VisualizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
