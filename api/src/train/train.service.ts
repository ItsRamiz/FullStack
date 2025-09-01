import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainService {

    runTraining() {
        return "Training Running";
    }

    generateJobId(): string {
        // Ensure the number is always 9 digits (from 100000000 to 999999999)
        const jobId = Math.floor(100000000 + Math.random() * 900000000);
        return jobId.toString();
    }

    

}
