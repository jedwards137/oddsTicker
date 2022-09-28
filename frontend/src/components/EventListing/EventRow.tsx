import React, { ReactElement } from "react";
import LabelRow from "./LabelRow";
import TeamRow from "./TeamRow";
import { IEvent } from "../../models/IEvent";
import { FieldAdvantage } from "../../common/enums";
import { Box } from "@mui/material";

const EventRow = ({ event }: { event: IEvent }): ReactElement => {
  return (
    <Box mb={3}>
      <Box>
        <LabelRow commenceTime={event.commenceTime} />
      </Box>
      <Box mb={1}>
        <TeamRow team={event.awayTeam} fieldAdvantage={FieldAdvantage.Away} />
      </Box>
      <Box>
        <TeamRow team={event.homeTeam} fieldAdvantage={FieldAdvantage.Home} />
      </Box>
    </Box>
  );
}

export default EventRow;