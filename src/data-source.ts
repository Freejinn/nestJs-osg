import { DataSource, DataSourceOptions } from 'typeorm';
import { GroupSkill } from './entities/groupSkill.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Poppy!79',
  database: 'testosg',
  entities: [__dirname + '/../**/*.entity.{js,ts}', 
  GroupSkill],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
