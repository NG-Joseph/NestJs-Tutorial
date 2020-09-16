/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseFilters, UsePipes } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaces';
import {HttpExceptionFilter} from '../filters/http-exception.filter'
import {ValidationPipe} from '../pipes/validation.pipe'
import {itemData} from '../decorators/itemdata.decorator'
import { ValidationExceptionFilter } from 'src/filters/validation-exception';

@Controller('items')
@UsePipes(ValidationPipe)
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id)
    .then((result) =>{
      if(result) {
        return result;
      } else {
        throw new HttpException("Sorry, We can't find what you are looking for.", HttpStatus.NOT_FOUND)
      }
    }).catch(()=>{
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND)
    })
    ;
  }
//Custom Filter
  @Post()
  @UseFilters(new ValidationExceptionFilter())
  create(@itemData(ValidationPipe) createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

}