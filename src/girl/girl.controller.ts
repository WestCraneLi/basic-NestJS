import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Query,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('Girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }

  // request.query获取参数
  // @Get('/getGirlById')
  // getGirlById(@Request() req): any {
  //   const id: number = parseInt(req.query.id);
  //   return this.girlService.getGirlById(id);
  // }

  // 使用query代替request.query.id即query.id
  @Get('/getGirlById')
  getGirlById1(@Query() query): any {
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }

  // 动态路由 即girl/1
  @Get('/findGirlById/:id')
  findGirlById2(@Request() req): any {
    const id: number = parseInt(req.params.id);
    return this.girlService.getGirlById(id);
  }

  // 简写参数
  @Get('/findGirlById/:id')
  findGirlById3(@Param() params): any {
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }

  // 多参数传递
  @Get('/findGirlById/:id/:name')
  findGirlById4(@Request() req): any {
    const id: number = parseInt(req.params.id);
    return this.girlService.getGirlById(id);
  }

  // 读取请求头信息
  @Get('/findGirlById/:id/:name')
  findGirlById5(@Param() params, @Headers() header): any {
    console.log(params.name);
    console.log(header);
    const id: number = parseInt(params.id);
    return this.girlService.getGirlById(id);
  }

  // 无法通过网页直接看到返回，因为地址属于get请求，需要用到相关api请求工具
  // 使用request
  // @Post('/add')
  // addGirl(@Request() req): any {
  //   console.log(req.body);
  //   return this.girlService.addGirl();
  // }

  // 使用body
  @Post('/add')
  addGirl(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl();
  }

  // 删除
  @Post('/delGirl')
  delGirl(@Body() body): any {
    const id: string | number = body.id;
    return this.girlService.delGirl(id);
  }

  // 更新
  @Post('/updateGirl')
  updateGirl(@Body() body): any {
    const id: string | number = body.id;
    const girl: any = {
      name: body.name,
      age: body.age,
    };
    return this.girlService.updateGirl(id, girl);
  }

  // 获取所有女孩数据
  @Get('/getAllGirls')
  getAllGirls(): any {
    return this.girlService.getAllGirls();
  }

  // 根据姓名查找女孩信息
  @Post('/getGirlByName')
  getGirlByName(@Body() body): any {
    return this.girlService.getGirlByName(body.name);
  }

  // 热重载
  @Get('/hotLoad')
  hotLoad(): any {
    return 'HotLoad Function';
  }
}
