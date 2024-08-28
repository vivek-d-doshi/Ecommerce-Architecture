import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDetail } from '../../database/schemas/product-detail.schema';

@Controller('product')
export class ProductController {
  constructor(
    private readonly logger: Logger,
    private readonly productService: ProductService,
  ) {}
  @Get('')
  getProductByName(@Query('name') nameOfProduct: string) {
    this.logger.log(`getProductByName :: called`);
    return this.productService.getProduct(nameOfProduct);
  }

  @Post('/create')
  addProduct(@Body() product: ProductDetail) {
    this.logger.log(`addProduct :: called`);
    return this.productService.addProduct(product);
  }
}
