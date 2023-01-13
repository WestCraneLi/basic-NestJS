// 全局模块

import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'Config',
      useValue: { shopName: '红浪漫' },
    },
  ],
  exports: [
    {
      provide: 'Config',
      useValue: { shopName: '红浪漫' },
    },
  ],
})
export class ConfigModule {
  // 动态模块
  // static forRoot (option:string):DynamicModule{
  //   return {
  //     module:ConfigModule,
  //     providers:[{
  //       provide:"Config",
  //       useValue:{shopName:"红浪漫"+option}
  //     }],
  //     exports:[{
  //       provide:"Config",
  //       useValue:{shopName:"红浪漫"+option}
  //     }]
  //   }
  // }
}
