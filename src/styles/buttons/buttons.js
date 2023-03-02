import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme/theme";

export const AmountButtons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".2rem",
  height: "2rem",
  width: "7rem",
  border: `1px solid ${Colors.primary}`,
  borderRadius: "5px",
  cursor: "pointer",
}));
