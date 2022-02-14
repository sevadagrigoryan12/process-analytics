import Sequelize from 'sequelize';

import { EventAnalyticsInstance } from 'data/interfaces';
import { databaseService } from 'services/database';

/**
 * ATTENTION: WE CAN DEFINE SEPARATE TABLE BASED ON OUR CRITERIAS FOR CALCULATING ANALYTICS
 * EventAnalytics - IT'S ONLY FOR VIDEO STATYSTICS, FOR POPULAR APPS WE CAN DEFINE ANOTHER TABLE
 */

// eslint-disable-next-line @typescript-eslint/naming-convention
export const EventAnalytics = databaseService.define<EventAnalyticsInstance>('EventAnalytics', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  orgId: {
    type: Sequelize.STRING(75),
  },
  userId: {
    type: Sequelize.STRING(75),
  },
  videoId: {
    type: Sequelize.STRING(75),
  },
  viewsCount: {
    type: Sequelize.BIGINT,
  },
  date: {
    type: Sequelize.DATE,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});
