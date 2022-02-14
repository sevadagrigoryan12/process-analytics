import config from 'config/environment/variables';
import { serviceSchema } from 'config/environment/schemas';

const { error, value: env } = serviceSchema.validate(config);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  projectName: env.PROJECT_NAME,
  env: env.NODE_ENV,
  log: {
    level: env.LOG_LEVEL,
    directory: env.LOG_PATH,
    types: env.LOG_TYPES,
  },
  port: env.PORT || 3000,
  baseApiUrl: env.BASE_API_URL,
  database: {
    host: env.MSSQL_HOST,
    port: env.MSSQL_PORT,
    database: env.MSSQL_DATABASE,
    user: env.MSSQL_USER,
    password: env.MSSQL_PASSWORD,
    charset: env.MSSQL_CHARSET,
    collate: env.MSSQL_COLLATE,
    timezone: env.MSSQL_TZ,
    logging: env.MSSQL_LOGGING ? console.log : false, // eslint-disable-line no-console
  },
};
