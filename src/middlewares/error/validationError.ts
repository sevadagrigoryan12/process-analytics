import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';
import { createFailResponse } from 'utils/response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validationError(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    let errorMessage = Object.keys(err.details).reduce((errMessage: string, errKey: string) => {
      // eslint-disable-next-line security/detect-object-injection,@typescript-eslint/no-explicit-any
      const errors = (err as any).details[errKey].map((e: any) => e.message).join('. ');
      return `${errMessage}${errors}`;
    }, '');

    return createFailResponse(req, res, 400, errorMessage, {}, err);
  }

  return next(err);
}
