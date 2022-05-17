import * as winston from 'winston';
import { isObject } from 'lodash';
import { SPLAT } from 'triple-beam';
import { APP_NAME } from './config.json';

const formatObject = (param) => {
  if (isObject(param)) {
    return JSON.stringify(param);
  }
  return param;
};

const all = winston.format((info) => {
  const splat = info[SPLAT] || [];
  const message = formatObject(info.message);
  const rest = splat.map(formatObject).join(' ');
  info.message = `${message} ${rest}`;
  return info;
});

export const winstonConfig = {
  format: winston.format.combine(
    all(),
    winston.format.simple(),
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.printf(
      (info) =>
        `[${info.timestamp}][${info.level}]: ${formatObject(info.message)}`,
    ),
  ),
  transports: [
    new winston.transports.File({
      level: 'info',
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/${APP_NAME}-info.log`,
    }),
    new winston.transports.File({
      level: 'error',
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/${APP_NAME}-error.log`,
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        all(),
        winston.format.simple(),
        winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize(),
        winston.format.printf(
          (info) =>
            `[${info.timestamp}][${info.level}]: ${formatObject(info.message)}`,
        ),
      ),
    }),
  ],
};
