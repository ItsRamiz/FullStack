import { Injectable , Body } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TrainService {
    constructor(private readonly httpService: HttpService) {}

    generateJobId(): string {
        // Ensure the number is always 9 digits (from 100000000 to 999999999)
        const jobId = Math.floor(100000000 + Math.random() * 900000000);
        return jobId.toString();
    }



    async sendTrainRequest(@Body() body: any)
    {
        console.log("Connection established with backend!");

        const job_id = this.generateJobId();
        const payload = { ...body , job_id}

        const pythonResponse = await firstValueFrom(
            this.httpService.post('http://127.0.0.1:5002/run', payload)
          );

        return {
        message: "Training Finished",
        job_id,
        received: body,
        pythonResponse: pythonResponse.data,
        gifUrl: pythonResponse.data.gifUrl || null
        };

    }
    


    





    

}
