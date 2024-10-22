import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from './services/app';
import { AppController } from './controllers/app';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'spa'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
