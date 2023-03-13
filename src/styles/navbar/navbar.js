import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Colors } from "../theme/theme";

export const AppBarContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "3.5rem",
  color: Colors.white,
}));

export const AppBarLogo = styled(Typography)(() => ({
  display: "flex",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: Colors.white,
  fontSize: "1.3rem",
  fontStyle: "italic",
  alignItems: "center",
}));
