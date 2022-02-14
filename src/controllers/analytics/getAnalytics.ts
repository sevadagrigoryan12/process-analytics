import { Request, Response } from 'express';
import { createSuccessResponse, createErrorResponse } from 'utils/response';
import { EventAnalytics } from 'data/models';
import { WhereOptions, Op } from 'sequelize';

interface GetAnalyticsForVideo extends Request {
  query: {
    startDate: string;
    endDate: string;
  };
}

export async function getAnalyticsForVideo(req: GetAnalyticsForVideo, res: Response) {
  const { startDate, endDate, videoId } = req.body;
  try {
    const whereOption: WhereOptions = {
      videoId,
      date: {
        [Op.between]: [startDate, endDate],
      },
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
    console.error('Error in getAnalyticsForVideo...', error);
    createErrorResponse(req, res, 500, 'Failed to fetch analytics');
  }
}
