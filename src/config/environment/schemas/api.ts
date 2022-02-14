/* eslint-disable @typescript-eslint/naming-convention */
import Joi from '@hapi/joi';

export const apiSchema = Joi.object({
  SERVICE_API_BASE_URL: Joi.string().required(),
})
  .unknown()
  .required();
