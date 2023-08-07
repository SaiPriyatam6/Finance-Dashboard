import { Box } from "@mui/material";
import { styled } from "@mui/system";

//Styled object, we will reuse it everywhere.
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
