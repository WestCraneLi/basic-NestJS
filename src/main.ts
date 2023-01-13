import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 所有请求前缀添加
  // app.setGlobalPrefix('HongLangMan');
  await app.listen(3000);
}
bootstrap();
