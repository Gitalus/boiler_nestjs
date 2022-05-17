import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  ejemplo: {
    helloWorld:
      'Hola desde src/config/config.ts (BORRAR ejemplo), llamado desde app.service.ts',
  },
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    port: parseInt(process.env.DATABASE_PORT),
  },
  /* Esto devuelve un objeto con atributos mapeados a variables de entorno,
  permite tener tipado al usar variables de entorno. Ver app.service.ts para
  entender mejor su uso.
  
  Ejemplo:
  database: {
    name: process.env.DATABASE_NAME,
    port: process.env.PORT,
  },
  postgres: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
  },
  apiKey: process.env.API_KEY,
  */
}));
