import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './girl.entities';

@Injectable()
export class GirlService {
  // 依赖注入
  constructor(
    @InjectRepository(Girl) private readonly girl: Repository<Girl>,
  ) {}

  getGirls(): any {
    return {
      code: 0,
      data: ['cuihua', '小红'],
      msg: '请求成功',
    };
  }
  getGirlById(id: number) {
    if (id > 2 || id < 0) {
      return {
        code: 500,
        msg: '获取失败',
      };
    }
    const bucket: any = [
      { id: 1, name: 'fff', age: 12 },
      { id: 2, name: 'gfddff', age: 152 },
      { id: 3, name: 'dfff', age: 1512 },
    ];
    return bucket[id];
  }
  addGirl(): any {
    const data = new Girl();
    data.name = 'build';
    data.age = 17;
    data.skill = 'best match';
    return this.girl.save(data);
  }

  // 删除女孩
  delGirl(id: string | number) {
    return this.girl.delete(id);
  }

  // 更新女孩
  updateGirl(id: string | number, data: any) {
    return this.girl.update(id, data);
  }

  // 得到所有女孩
  getAllGirls(): any {
    return this.girl.find();
  }

  // 根据姓名查找女孩信息
  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}
