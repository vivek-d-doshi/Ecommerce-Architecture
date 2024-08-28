import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'products',
  versionKey: false,
})
export class ProductDetail extends Document {
  @Prop({ required: true })
  productId!: string;

  @Prop()
  item!: string;

  @Prop()
  price!: string;

  @Prop()
  category!: string;

  @Prop()
  color?: string;

  @Prop()
  sku?: string;

  @Prop()
  createTime!: string;

  @Prop()
  updateTime!: string;
}
export const ProductDetailSchema = SchemaFactory.createForClass(ProductDetail);
