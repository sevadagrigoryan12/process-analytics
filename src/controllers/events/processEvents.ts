import { Request, Response } from 'express';
import { createSuccessResponse, createErrorResponse } from 'utils/response';
import { ProcessEventsDTO } from 'common/interfaces/ProcessEventsDTO.interface';
import { EventHistory, EventAnalytics } from 'data/models';
import { WhereOptions } from 'sequelize';

interface ProcessEventsRequest extends Request {
  body: ProcessEventsDTO;
}

export async function processEvents(req: ProcessEventsRequest, res: Response) {
  const { time, videoId, orgId, userId } = req.body;
  try {
    await EventHistory.create(req.body);
    const whereOption: WhereOptions = {
      videoId,
      orgId,
      userId,
      time,
    };
    const analyticForSpecifiedDay = await EventAnalytics.findOne({
      where: whereOption,
    });
    if (analyticForSpecifiedDay) {
      analyticForSpecifiedDay.increment({
        viewsCount: 1,
      });
    }
    createSuccessResponse(res, 200);
  } catch (error) {
    console.error('Error in processEvents...', error);
    createErrorResponse(req, res, 500, 'Failed to process Events');
  }
}
