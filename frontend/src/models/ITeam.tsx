import { IOutcome } from "./IOutcome";

export interface ITeam {
	name: string;
	score?: string;
	odds: Map<string, IOutcome>;
}