import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { SkillParent} from './entities/parentSkill.entity';
import { SkillBadge } from './entities/skillBadge.entity';
import { SkillParts } from './entities/skillPart.entity';

@Module({
  imports: [AuthModule, UserModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Poppy!79',
      database: 'testosg',
      entities: [User, SkillParent, SkillBadge, SkillParts],
      synchronize: true,
      autoLoadEntities: true,
  }),
  ConfigModule.forRoot() ],
})
export class AppModule {}
