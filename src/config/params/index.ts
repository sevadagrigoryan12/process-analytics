import Joi from '@hapi/joi';
import { EVENT_TYPES, ALLOWED_VIDEO_TYPES } from 'config/common/constants';

export default {
  processEvents: {
    body: Joi.object({
      originLocationCode: Joi.string().required(),
      destinationLocationCode: Joi.string().required(),
      departureDate: Joi.string().required(),
      orgId: Joi.string().required(),
      userId: Joi.string().required(),
      videoId: Joi.string().required(),
      eventType: Joi.string().required().valid(EVENT_TYPES.SEARCH, EVENT_TYPES.UPLOAD, EVENT_TYPES.VIEW),
      time: Joi.date(), //ISO String
      watchedDuration: Joi.string(), //'00:20:00.000', //20 minutes
      totalDuration: Joi.string(), // 1 hour
      searchedApp: Joi.string(), // optional
      videoSize: Joi.string(), //50 megabytes // // optional
      videoFormat: ALLOWED_VIDEO_TYPES.MP4, // // optional
    }),
  },
};
