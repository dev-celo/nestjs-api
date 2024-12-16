import { Global, Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesDriverService } from './routes-drives/routes-drives.service';

@Global()
@Module({
  imports: [PrismaModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService],
})
export class RoutesModule {}
