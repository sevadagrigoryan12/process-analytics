import { EVENT_TYPES, ALLOWED_VIDEO_TYPES } from '../constants';

export interface ProcessEventsDTO {
  orgId: string;
  userId: string;
  videoId: string;
  eventType: EVENT_TYPES;
  time: Date; //ISO String
  watchedDuration: string; //'00:20:00.000', //20 minutes
  totalDuration: string; // 1 hour
  searchedApp: string; // optional
  videoSize: string; //50 megabytes // // optional
  videoFormat: ALLOWED_VIDEO_TYPES; // // optional
}
