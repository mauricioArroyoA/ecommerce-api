import { DataSource } from 'typeorm';
import { Product } from 'src/common/entities/product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'ecommerce-db',
  entities: [Product],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
