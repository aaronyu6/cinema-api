import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';
import * as https from 'https';
import { join } from 'path';

async function bootstrap() {
  const certPath = join(__dirname, '..', '/cert');
  const httpsOptions = {
    key: fs.readFileSync(certPath + '/server.key'),
    cert: fs.readFileSync(certPath + '/server.crt'),
  };

  const server = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
    { cors: true }
  );
  //await app.listen(3000);
  await app.init();

  http.createServer(server).listen(3001);
  https.createServer(httpsOptions, server).listen(2443);
}
bootstrap();
