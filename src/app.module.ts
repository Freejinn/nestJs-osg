import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';
import { SkillParent } from './entities/parentSkill.entity';
import { SkillBadge } from './entities/skillBadge.entity';
import { SkillPart } from './entities/skillPart.entity';
import { SkillModule } from './skills/skill.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    SkillModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
