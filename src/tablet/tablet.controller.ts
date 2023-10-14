import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabletService } from './tablet.service';
import { CreateTabletDto } from './dto/create-tablet.dto';
import { UpdateTabletDto } from './dto/update-tablet.dto';

@Controller('tablet')
export class TabletController {
  constructor(private readonly tabletService: TabletService) {}

  @Post('register')
  create(@Body() createTabletDto: CreateTabletDto) {
    return this.tabletService.create(createTabletDto);
  }

  @Get('findAll')
  findAll() {
    return this.tabletService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabletService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabletDto: UpdateTabletDto) {
    return this.tabletService.update(+id, updateTabletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabletService.remove(+id);
  }
}
