import { Request, Response } from 'express'; // eslint-disable-line import/no-unresolved

export const createSuccessResponse = (response: Response, code = 200, data = {}) =>
  response.status(code).json({
    data,
  });

export const createFailResponse = (
  request: Request,
  response: Response,
  code = 400,
  message = 'Bad Request',
  data = {},
  error = {},
) => {
  console.error(message, { err: error });

  response.status(code).json({
    message,
    data,
    error,
  });
};

export const createAccessDeniedResponse = (
  request: Request,
  response: Response,
  error = {},
  message = 'Do Not Have Permission',
  code = 403,
) => {
  console.error(message, { err: error });

  response.status(code).json({
    message,
    error,
  });
};

export const createErrorResponse = (
  request: Request,
  response: Response,
  code = 500,
  message = 'Internal Server Error',
  error = {},
) => {
  console.error(message, { err: error });

  response.status(code).json({
    message,
    error,
  });
};

export const createResponse = (
  request: Request,
  response: Response,
  code: number,
  message: string,
  data: Record<string, unknown>,
) => {
  if (code >= 200 && code < 300) {
    createSuccessResponse(response, code, data);
  } else if (code === 403) {
    createAccessDeniedResponse(request, response);
  } else if (code >= 400 && code < 500) {
    createFailResponse(request, response, code, message, data);
  } else {
    createErrorResponse(request, response, code, message, data);
  }
};
