import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainService {

    runTraining() {
        return "Training Running";
    }

}
