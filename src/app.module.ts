import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CinemaModule,
    MongooseModule.forRoot('mongodb://localhost/wmpcinemassl')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
