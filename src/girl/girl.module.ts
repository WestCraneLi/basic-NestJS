import { Module } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Girl } from './girl.entities';

@Module({
  controllers: [GirlController],
  providers: [GirlService],
  imports: [TypeOrmModule.forFeature([Girl])],
})
export class GirlModule {}
