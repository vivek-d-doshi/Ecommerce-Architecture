import { Logger, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import {
  ProductDetail,
  ProductDetailSchema,
} from '../../database/schemas/product-detail.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductDetailRepository } from '../../database/schemas/product-detail.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductDetail.name, schema: ProductDetailSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, Logger, ProductDetailRepository],
})
export class ProductModule {}
