import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './train/train.module';
import { VisualizeModule } from './visualize/visualize.module';

@Module({
  imports: [TrainModule, VisualizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
