import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from 'src/common/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/common/dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);

    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productsRepository.find();

    return products;
  }
}
