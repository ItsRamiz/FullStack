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
    async root(@Body() body: any) {

      return this.trainService.sendTrainRequest(body);
    }
  }