import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './';
import { AppService } from '../../services/app';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('index', () => {
    it('should return "state"', () => {
      const appController = app.get(AppController);
      expect(appController.index()).toEqual({
        payload: { app: { state: 'COMING_SOON' } },
      });
    });
  });
});
