import { Router } from 'express';
import { validate } from 'express-validation';

import serviceParamValidation from 'config/params';
import { healthController } from 'controllers/health';
import { processEvents } from 'controllers/events';

const router = Router();

/**
 * @api {get} /health Request Health information
 * @apiVersion 0.0.0
 * @apiName GetHealth
 * @apiDescription Provides health of the service.
 * @apiGroup Health
 *
 * @apiSuccess {Object} health Health of the Service.
 * @apiSuccess {String} health.status Status.
 * @apiSuccess {String} health.date Date.
 *
 * @apiError {Object} error Error description
 */
router.get('/health', healthController);

/**
 * @api {get} /processEvents
 * @apiVersion 0.0.0
 * @apiName ProcessEvents
 * @apiGroup api
 *
 * @apiParam {array} destinationLocationCode
 * @apiParam {array} originLocationCode
 * @apiParam {array} departureDate
 *
 * @apiSuccess {Object} Result
 *
 * @apiError {Object} error Error description
 */
router.post('/processEvents', validate(serviceParamValidation.processEvents, {}, { abortEarly: false }), processEvents);

export default router;
