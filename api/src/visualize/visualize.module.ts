import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { VisualizeController } from './visualize.controller';
import { VisualizeService } from './visualize.service';


@Module({
  imports: [HttpModule],          
  controllers: [VisualizeController],
  providers: [VisualizeService],
})
export class VisualizeModule {}
