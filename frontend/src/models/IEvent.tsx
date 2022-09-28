import { ITeam } from "./ITeam";

export interface IEvent {
  eventId: string;
	sportKey: string;
	commenceTime: string;
	homeTeam: ITeam;
	awayTeam: ITeam;
}