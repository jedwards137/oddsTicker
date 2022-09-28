 import { IEvent } from "../models/IEvent";
// import Grid from "@mui/material/Unstable_Grid2";
// import { IBookmaker } from "../models/IBookmaker";
// import { IMarket } from "../models/IMarket";

// interface EventListingProps {
//   event: IEvent;
// }

// const EventListing = (props: EventListingProps) => {

//   const marketColumns = (teamName: string, bookmakers: IBookmaker[]) => {
//     var markets = bookmakers[0].markets;

//     return (
//       <>
//         { markets.map((market: IMarket) => {
//           var teamOutcome = market.outcomes.find(outcome => outcome.name === teamName);
//           <Grid xs={3}>
//             hi
//           </Grid>
//         })}
//       </>
//     );
//   }

//   return (
//     <>
//       <Grid xs={12}>
//         <Grid xs={3}>
//           {props.event.homeTeam}
//         </Grid>
//         {marketColumns(props.event.homeTeam, props.event)}
//       </Grid>
//     </>
//   );
// }

// export default EventListing;