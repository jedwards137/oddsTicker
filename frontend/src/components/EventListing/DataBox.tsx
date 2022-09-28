import { Box, styled } from "@mui/material";

const StyledDataBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4fcf2",
  border: "1px solid #7ca18d",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}))

export default StyledDataBox;