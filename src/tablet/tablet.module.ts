import { Module } from '@nestjs/common';
import { TabletService } from './tablet.service';
import { TabletController } from './tablet.controller';
import { Tablet } from './entities/tablet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TabletController],
  providers: [TabletService],
  imports:[
    TypeOrmModule.forFeature([Tablet])
  ]
})
export class TabletModule {}
