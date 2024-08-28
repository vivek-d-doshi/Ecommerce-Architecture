import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Entities from '../database/enitites';

const DB_TYPE = 'postgres';
export const DB_CONFIG: TypeOrmModuleOptions = {
  type: DB_TYPE,
  host: process.env.ACCOUNT_MSSQL_DB_HOST ?? 'localhost',
  port: Number(process.env.ACCOUNT_MSSQL_DB_PORT) ?? 5432,
  username: process.env.ACCOUNT_MSSQL_DB_USERNAME ?? 'Admin',
  password: process.env.ACCOUNT_MSSQL_DB_PASSWORD ?? 'admin',
  database: process.env.ACCOUNT_MSSQL_DB_NAME ?? 'ecomm',
  schema: process.env.ACCOUNT_MSSQL_DB_SCHEMA ?? 'identity',
  entities: Entities,
};
