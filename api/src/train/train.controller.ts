import { Controller, Get } from '@nestjs/common';
import { TrainService } from './train.service';

@Controller('train')
export class TrainController {

    constructor(private readonly trainService: TrainService) {}

    @Get() // GET /train
    root() {
      return { ok: true, message: 'train is alive' };
    }


    @Get('run')
    runTraining()
    {
        return this.trainService.runTraining();
    }

}
