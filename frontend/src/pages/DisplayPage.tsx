import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { IEvent } from "../models/IEvent";
import { translateEvents } from "../translators/EventsTranslator";
import EventRow from "../components/EventListing/EventRow";

const DisplayPage = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchOdds = async () => {
      const response = await fetch('/sports/baseball_mlb/odds/?regions=us&markets=spreads,h2h,totals&oddsFormat=american');
      const responseJson = await response.json();
      if (response.ok) {
        var translatedEvents = translateEvents(responseJson);
        setEvents(translatedEvents);
      }
    }
    fetchOdds();
  }, []);

  return (
    <Grid container>
    <Grid xs={12}>
      {events && events.map((event: IEvent) => (
          <EventRow event={event} />
      ))}
      </Grid>
    </Grid>
  );
}

export default DisplayPage;