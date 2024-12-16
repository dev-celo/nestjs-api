import { Test, TestingModule } from '@nestjs/testing';
import { RoutesDrivesService } from './routes-drives.service';

describe('RoutesDrivesService', () => {
  let service: RoutesDrivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutesDrivesService],
    }).compile();

    service = module.get<RoutesDrivesService>(RoutesDrivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
