import { DataSource, DataSourceOptions } from 'typeorm';
import { SkillParent } from './entities/parentSkill.entity';
import { SkillBadge } from './entities/skillBadge.entity';
import { SkillPart } from './entities/skillPart.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Poppy!79',
  database: 'testosg',
  entities: [__dirname + '/../**/*.entity.{js,ts}', 
  SkillParent, SkillBadge, SkillPart],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
