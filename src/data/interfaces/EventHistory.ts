import { Model, Optional } from 'sequelize';
import { ProcessEventsDTO } from 'common/interfaces/ProcessEventsDTO.interface';

export interface EventHistoryAttributes extends ProcessEventsDTO {
  uuid: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventHistoryCreationAttributes extends Optional<EventHistoryAttributes, 'uuid'> {}

export interface EventHistoryInstance
  extends Model<EventHistoryAttributes, EventHistoryCreationAttributes>,
    EventHistoryAttributes {}
