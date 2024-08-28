import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './db-config';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG)],
})
export class SqlModuleModule {}
