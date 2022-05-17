import * as Joi from 'joi';

const envSchema = Joi.object({
  /* Esto exige que exista un archivo *.env con estas variables de entorno o
  la aplicación generará una exception y no podrá iniciarse 
  Ejemplo:
  API_KEY: Joi.number().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_HOST: Joi.string().hostname().required(),
  */
});

export default envSchema;
