import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from 'dotenv';
import { resolve } from 'path';

import { AppController } from './app.controller';

config({ path: resolve(__dirname, '../../../.env') });

const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      poolSize: configService.get('POSTGRES_POOL'),
      entities: [],
      synchronize: false,
      logging: process.env.NODE_ENV !== 'production',
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
