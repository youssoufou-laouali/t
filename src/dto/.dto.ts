import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsOptional,
  IsNumber,
  IsNotEmpty,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class CreateDto {
}

export class UpdateDto extends PartialType(CreateDto) {}

export class PaginationParams {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  decalage?: number;
 
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;
 
  @IsOptional()
  @Type(() => String)
  @IsString()
  dateDebut?: string;
 
  @IsOptional()
  @Type(() => String)
  @IsString()
  dateFin?: string;
}
