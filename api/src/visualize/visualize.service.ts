import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class VisualizeService {
  constructor(private readonly httpService: HttpService) {}

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
      // Call the Python backend to generate visualization
      const response = await firstValueFrom(
        this.httpService.post('http://127.0.0.1:5002/generate', { selectedName })
      );
      return response.data;  // This should return {"gifUrl": "..."}
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