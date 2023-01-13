import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Girl } from './girl.entities';
import { CounterMiddleware } from '../counter/counter.middleware';

@Module({
  controllers: [GirlController],
  // 简写 无注入
  // providers: [GirlService],

  // 正规写法
  providers: [
    {
      provide: 'girl',
      useClass: GirlService,
    },
    {
      provide: 'GirlArray',
      useValue: ['小红', '小翠'],
    },
    {
      provide: 'MyFactory',
      useFactory() {
        console.log('myFactory---------:');
        return 'console.log() function';
      },
    },
  ],
  imports: [TypeOrmModule.forFeature([Girl])],
})
export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes('girl');

    // 指定请求类型
    //consumer.apply(CounterMiddleware).forRoutes({path:'girl',method:RequestMethod.GET})
  }
}
