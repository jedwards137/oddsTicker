import React, { ReactElement } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Labels from "../../common/Labels.json";
import { Typography } from "@mui/material";

const LabelRow = ({ commenceTime }: { commenceTime: string }): ReactElement => {
  const commenceTimeDate = new Date(commenceTime);
  const commenceTimeMonthString = commenceTimeDate.getMonth().toString();
  const commenceTimeValue = commenceTimeDate.toLocaleDateString() + ' | ' + commenceTimeDate.toLocaleTimeString();

  return (
    <Grid container>
      <Grid xs={4}>
        <Typography variant="subtitle1">
          {commenceTimeValue}
        </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <Typography variant="overline">
          {Labels.common.scores}
        </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <Typography variant="overline">
          {Labels.sports.baseball.h2h}
        </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <Typography variant="overline">
          {Labels.sports.baseball.spread}
        </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <Typography variant="overline">
          {Labels.sports.baseball.total}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default LabelRow;