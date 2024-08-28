import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const defaultPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? defaultPort;

  // any methods over app should be applied before serving to take action
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
    }),
  );
  // app.setGlobalPrefix('');
  app.enableVersioning();

  // app is served
  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: http://localhost:${PORT}/v1`,
  );
}
bootstrap();
