import { IEvent } from "../models/IEvent";
import { IOutcome } from "../models/IOutcome";
import { ITeam } from "../models/ITeam";

export const translateEvents = (jsonEvents: []): IEvent[] => {
  var events: IEvent[] = [];
  jsonEvents.map((rawEvent: any) => {
    var rawMarkets = rawEvent.bookmakers[0].markets;
    var event: IEvent = {
      eventId: rawEvent.id,
      sportKey: rawEvent.sport_key,
      commenceTime: rawEvent.commence_time,
      homeTeam: translateTeam(rawEvent.away_team, rawMarkets),
      awayTeam: translateTeam(rawEvent.home_team, rawMarkets),
    };
    events.push(event);
  });
  return events;
}

const translateTeam = (teamName: string, rawMarkets: any) => {
  var teamOdds: Map<string, IOutcome> = new Map<string, IOutcome>();
  rawMarkets.map((rawMarket: { [x: string]: any; }) => {
    rawMarket.outcomes.forEach((rawOutcome: {
      price: string | undefined;
      point: string | undefined; 
      name: any; 
    }) => {
      var isRelatedOutcome = rawOutcome.name === teamName || 'Over' || 'Under';
      if (!isRelatedOutcome) {
        return;
      }
      var outcome: IOutcome = {
        price: rawOutcome.price,
        point: rawOutcome.point
      };
      switch (rawOutcome.name) {
        case teamName:
          teamOdds.set(rawMarket.key, outcome);
          break;
        case 'Over':
          teamOdds.set(rawOutcome.name, outcome);
          break;
        case 'Under':
          teamOdds.set(rawOutcome.name, outcome);
          break;
        default:
          break;
      }
    });
  });

  var team: ITeam = {
    name: teamName,
    score: undefined,
    odds: teamOdds
  }
  return team;
}