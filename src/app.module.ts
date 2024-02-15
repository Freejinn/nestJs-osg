import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';
import { SkillModule } from './skills/skill.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    SkillModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
        // this maps the dist/assets directory to / in the web app
        rootPath: join(__dirname, '..', 'assets')
      }),
  ],
})
export class AppModule {}
