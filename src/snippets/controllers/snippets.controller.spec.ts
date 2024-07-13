import { Test, TestingModule } from '@nestjs/testing';
import { SnippetsController } from './snippets.controller';

describe('SnippetsController', () => {
  let controller: SnippetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnippetsController],
    }).compile();

    controller = module.get<SnippetsController>(SnippetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
