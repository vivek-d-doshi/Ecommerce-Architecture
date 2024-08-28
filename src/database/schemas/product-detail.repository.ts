import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { ProductDetail } from './product-detail.schema';
import {
  FilterQuery,
  Model,
  // DeleteResult,
  // UpdateResult
} from 'mongoose';
@Injectable()
export class ProductDetailRepository {
  constructor(
    @InjectRepository(ProductDetail)
    private productModel: Model<ProductDetail>,
  ) {}

  findOne(
    where: FindOptionsWhere<ProductDetail>,
    relations?: FindOptionsRelations<ProductDetail>,
  ): Promise<ProductDetail | null> {
    return this.productModel.findOne({
      where,
      relations,
    });
  }

  findAll(
    where: FindOptionsWhere<ProductDetail>,
    relations?: FindOptionsRelations<ProductDetail>,
  ): Promise<ProductDetail[] | null> {
    return this.productModel.find({
      where,
      relations,
    });
  }

  async insertOne(params: Partial<ProductDetail>): Promise<ProductDetail> {
    return this.productModel.create(params);
  }

  updateOne(
    filterQuery: FilterQuery<ProductDetail>,
    params: Partial<ProductDetail>,
  ) {
    // : Promise<UpdateResult | ProductDetail>
    return this.productModel
      .updateOne(filterQuery, {
        $set: { ...params },
      })
      .exec();
  }

  // async deleteOne(params: FilterQuery<Partial<ProductDetail>>) {
  //   return this.productModel.deleteOne({ ...params });
  // }
}
