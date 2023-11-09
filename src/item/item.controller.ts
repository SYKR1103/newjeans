import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async createProduct(@Body() createItemDto: CreateItemDto) 
  {return await this.itemService.createProduct(createItemDto)}

  @Get("all")
  async getProducts()  
  {return await this.itemService.getProducts()}


  @Get(':id') 
  async getProductById(@Param("id") id:string)  
  {return await this.itemService.getProductById(id)}



  @Patch(':id')
  async updateProductById(@Param("id") id:string, @Body() createItemDto: CreateItemDto)  
  {return await this.itemService.updateProductById(id,createItemDto)}


  @Delete(':id')
  async  deleteProductById(@Param("id") id:string)  
  {return await this.itemService.deleteProductById(id)}
}
