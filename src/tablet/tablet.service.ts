import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTabletDto } from './dto/create-tablet.dto';
import { UpdateTabletDto } from './dto/update-tablet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tablet } from './entities/tablet.entity';
import { Repository, Table } from 'typeorm';

@Injectable()
export class TabletService {
  constructor(
    @InjectRepository(Tablet)
    private readonly tabletRepository: Repository<Tablet>,
  ) {}
  async create(createTabletDto: CreateTabletDto) {
     try {
      const{...tabletDetails}= createTabletDto;
      const tablet = this.tabletRepository.create({
        ...tabletDetails,
      })
      await this.tabletRepository.save(tablet);
      return tablet;
     } catch (error) {
      this.handleDbErrors(error);
     }
  }
  private handleDbErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    console.log(error);
    throw new InternalServerErrorException('please check server logs');
  }
  findAll() {
    return this.tabletRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} tablet`;
  }

  update(id: number, updateTabletDto: UpdateTabletDto) {
    return `This action updates a #${id} tablet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tablet`;
  }
}
 