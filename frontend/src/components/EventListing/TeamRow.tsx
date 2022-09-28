import React, { ReactElement } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ITeam } from "../../models/ITeam";
import { FieldAdvantage, OddsMarket, Totals } from "../../common/enums";
import Labels from "../../common/Labels.json";
import StyledDataBox from "./DataBox";
import { Typography } from "@mui/material";

const TeamRow = ({ 
  team,
  fieldAdvantage }: {
    team: ITeam,
    fieldAdvantage: FieldAdvantage
}): ReactElement => {
  const scoreValue = team.score ?? Labels.common.null;
  const h2hValue = team.odds.get(OddsMarket.H2H)?.price;
  const spreadsValue: string[] = [team.odds.get(OddsMarket.Spreads)?.point ?? "", team.odds.get(OddsMarket.Spreads)?.price ?? ""];
  let totalsValue: string[] = [];
  switch (fieldAdvantage) {
    case FieldAdvantage.Away:
      totalsValue[0] = "o" + team.odds.get(Totals.Over)?.point;
      totalsValue[1] = team.odds.get(Totals.Over)?.price ?? "";
      break;
    case FieldAdvantage.Home:
      totalsValue[0] = "u" + team.odds.get(Totals.Under)?.point;
      totalsValue[1] = team.odds.get(Totals.Under)?.price ?? "";
      break;
    default:
      break;
  }

  function comprehensiveOdds(columnValue: string[]) {
    return (
      <>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {columnValue[0]}
        </Typography>
        <Typography variant="subtitle1">
          {columnValue[1]}
        </Typography>
      </>
    );
  }

  return (
    <Grid container columnSpacing={1} alignItems="stretch">
      <Grid xs={4}>
        <Typography variant="body1" sx={{ fontWeight: "bold", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {team.name}
        </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center"}}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {scoreValue}
          </Typography>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <StyledDataBox sx={{ alignItems:"center" }}>
          <Typography variant="subtitle1">
            {h2hValue}
          </Typography>
        </StyledDataBox>
      </Grid>
      <Grid xs={2} sx={{ textAlign: "center" }}>
        <StyledDataBox>
          {comprehensiveOdds(spreadsValue)}
        </StyledDataBox>
      </Grid>
      <Grid xs={2} direction="column" sx={{ textAlign: "center" }}>
        <StyledDataBox>
          {comprehensiveOdds(totalsValue)}
        </StyledDataBox>
      </Grid>
    </Grid>
  );
}

export default TeamRow;