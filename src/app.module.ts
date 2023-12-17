import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
