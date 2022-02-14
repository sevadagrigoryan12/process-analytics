import { Model, Optional } from 'sequelize';

export interface EventAnalyticsAttributes {
  uuid: string;
  orgId: string;
  userId: string;
  date: Date;
  videoId: string;
  viewsCount: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventAnalyticsCreationAttributes extends Optional<EventAnalyticsAttributes, 'uuid'> {}

export interface EventAnalyticsInstance
  extends Model<EventAnalyticsAttributes, EventAnalyticsCreationAttributes>,
    EventAnalyticsAttributes {}
