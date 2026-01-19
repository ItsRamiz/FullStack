import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TrainService } from '../train/train.service';

@Injectable()
export class VisualizeService {
  constructor(
    private readonly httpService: HttpService,
    private readonly trainService: TrainService
  ) {}

  async refreshData() {
    try {
      const response = await firstValueFrom(
        this.httpService.get('http://127.0.0.1:5002/refresh')
      );
      return response.data; 
    } catch (error) {
      console.error('Error calling Python backend:', error);
      return {
        names: ['Error', 'Connecting', 'To', 'Backend', ':(']
      };
    }
  }

  async generateVisualization(selectedName: string) {
    try {

      let job_id = this.trainService.generateJobId();

      const payload = { selectedName, job_id };
      
      const response = await firstValueFrom(
        this.httpService.post('http://127.0.0.1:5002/visualize', payload)
      );

      let gifUrl = `http://127.0.0.1:5001/gif/${job_id}.gif`;


      return {"gifUrl": gifUrl};


    } catch (error) {
      console.error('Error generating visualization:', error);
      return {
        message: 'Visualization generation failed',
        selectedName,
        gifUrl: null
      };
    }
  }
}