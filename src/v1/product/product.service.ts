import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ProductDetailRepository } from '../../database/schemas/product-detail.repository';
import { ProductDetail } from '../../database/schemas/product-detail.schema';

@Injectable()
export class ProductService {
  constructor(
    private readonly logger: Logger,
    private productRepository: ProductDetailRepository,
  ) {}

  async getProduct(productName: string) {
    try {
      this.logger.log(` getProduct :: started `);
      const Product = await this.productRepository.findOne({
        item: productName,
      });
      if (!Product) {
        throw new HttpException(
          {
            code: 'PRDT-2001',
            message: 'Product not found',
          },
          404,
        );
      }
      this.logger.log(` getProduct :: ended `);
      return {
        code: 'PRDT-2001',
        data: Product,
      };
    } catch (error) {
      this.logger.error(`getProduct :: ${error}`);
      throw new HttpException(
        {
          code: 'PRDT-2002',
          message: error,
        },
        500,
      );
    }
  }

  async addProduct(productDetail: ProductDetail) {
    try {
      this.logger.log(` addProduct :: started `);
      const Product = await this.productRepository.insertOne(productDetail);
      this.logger.log(` addProduct :: ended `);
      return {
        code: 'PRDT-2001',
        data: Product,
      };
    } catch (error) {
      this.logger.error(`addProduct :: ${error}`);
      throw new HttpException(
        {
          code: 'PRDT-2002',
          message: error,
        },
        500,
      );
    }
  }
}
