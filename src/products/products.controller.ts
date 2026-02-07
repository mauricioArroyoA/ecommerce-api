import { CreateProductDto } from 'src/common/dtos/create-product.dto';
import { ProductsService } from './products.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  getProducts() {
    const products = this.productsService.findAll();

    return products;
  }
}
