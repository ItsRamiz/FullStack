import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { VisualizeController } from './visualize.controller';
import { VisualizeService } from './visualize.service';
import { TrainModule } from '../train/train.module';

@Module({
  imports: [HttpModule, TrainModule],
  controllers: [VisualizeController],
  providers: [VisualizeService],
})
export class VisualizeModule {}
