import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // opcional

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`🚀 Server running at http://localhost:${port}`);
}
void bootstrap();
