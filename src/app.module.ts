import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './v1/user/user.module';
import { SqlModuleModule } from './sql-module/sql-module.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './v1/product/product.module';

const mongoDbUri = process.env.ECOMMERCE_MONGO ?? 'mongodb://localhost:27017/';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MongooseModule.forRoot(mongoDbUri),
    UserModule,
    ProductModule,
    SqlModuleModule,
  ],
})
export class AppModule {}
