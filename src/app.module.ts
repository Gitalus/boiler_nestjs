import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { environments } from './config/environment';
import { DatabaseModule } from './database/database.module';
import envSchema from './config/envSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config], // permite que el archivo config esté disponible para injectar
      isGlobal: true,
      validationSchema: envSchema, // Valida que las variables de entorno esten correctas
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
