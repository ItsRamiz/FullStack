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
      // Call the Python backend
      const response = await firstValueFrom(
        this.httpService.get('http://127.0.0.1:5002/refresh')
      );
      return response.data;  // This will return {"names": ["Alice", "Bob"]}
    } catch (error) {
      console.error('Error calling Python backend:', error);
      // Fallback to mock data if Python backend fails
      return {
        names: ['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Eva Brown']
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


      return {"gifUrl": gifUrl};  // This should return {"gifUrl": "..."}


    } catch (error) {
      console.error('Error generating visualization:', error);
      // Return mock response if Python backend fails
      return {
        message: 'Visualization generation failed',
        selectedName,
        gifUrl: null
      };
    }
  }
}