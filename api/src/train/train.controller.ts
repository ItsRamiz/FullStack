import { Controller, Get, Post, Body } from '@nestjs/common';
import { TrainService } from './train.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('train')
export class TrainController {

    constructor(
        private readonly trainService: TrainService,
        private readonly httpService: HttpService
    ) {}

    @Post()
    async root(@Body() body: any) {  // 👈 make async

      console.log("Connected to Backend!");

      const job_id = this.trainService.generateJobId();
      const payload = { ...body , job_id}
  
      const pythonResponse = await firstValueFrom(
        this.httpService.post('http://127.0.0.1:5002/run', payload)
      );
  
      return {
        message: "Training started",
      };
    }
  }