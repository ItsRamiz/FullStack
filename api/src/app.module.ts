import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './train/train.module';
import { VisualizeModule } from './visualize/visualize.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { resolve } from 'path';


const GIF_DIR = resolve(__dirname, '..', 'rl-starter-files'); // __dirname = api/dist at runtime
// When running from dist/, __dirname = api/dist
@Module({
  imports: [    ServeStaticModule.forRoot({
    rootPath: GIF_DIR,
    serveRoot: '/gif',            // URL base path
    serveStaticOptions: {
      index: false,               // don’t look for index.html (fixes your ENOENT)
      cacheControl: false,
      etag: false,
      immutable: false,
    },

  }),TrainModule, VisualizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
