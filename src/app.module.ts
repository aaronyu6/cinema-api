import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [CinemaModule,
    MongooseModule.forRoot('mongodb://localhost/wmpcinemayu')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
