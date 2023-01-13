import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 所有请求前缀添加
  // app.setGlobalPrefix('HongLangMan');

  // 使用cors,处理跨域
  app.use(cors());

  // 使用全局中间件
  app.use(MiddleWareAll);

  await app.listen(3000);

  // 添加热重载
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

function MiddleWareAll(req: any, res: any, next: any) {
  console.log('我是全局中间件...');
  next();
}
