import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Poppy!79',
  database: 'testosg',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
