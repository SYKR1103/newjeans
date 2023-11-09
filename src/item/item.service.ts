import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item)
    private itemRepository : Repository<Item>
  ) {}

  async createProduct(item:CreateItemDto) {
    const newproduct = await this.itemRepository.create(item)
    await this.itemRepository.save(newproduct)
    return newproduct
  }
  
  async getProducts() {return this.itemRepository.find()}
  
  async getProductById(id:string) {
    const foundproduct = await this.itemRepository.findOneBy({id})
    if (foundproduct) {return foundproduct}
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }
  
  async updateProductById(id:string, item:CreateItemDto) {
    await this.itemRepository.update(id, item)
    const updatedproduct = this.itemRepository.findOneBy({id})
    if (updatedproduct) return updatedproduct
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }
  
  async deleteProductById(id:string) {
    const deleteresponse = this.itemRepository.delete(id)
    console.log("blaaaaaa")
    //if (!deleteresponse.affected) {throw new HttpException("not found", HttpStatus.NOT_FOUND)}
    if (deleteresponse) {throw new HttpException("not found", HttpStatus.NOT_FOUND)}
    return "deleted"
  }










}
