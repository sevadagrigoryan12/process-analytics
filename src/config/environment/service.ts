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
  flightsApiUrl: env.FLIGHTS_API_URL,
};
