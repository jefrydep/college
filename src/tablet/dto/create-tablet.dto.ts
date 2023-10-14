import { IsString, isString } from 'class-validator';

export class CreateTabletDto {
  @IsString()
  tabletCode: string;

  @IsString()
  tabletCode2: string;

  @IsString()
  customCode: string;

  @IsString()
  observations: string;
}
