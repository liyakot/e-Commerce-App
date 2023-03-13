import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/system";
import { Colors } from "../theme/theme";

export const PageContainer = styled(Container)(() => ({
  minHeight: "80vh",
  color: Colors.black,
  padding: "3rem 2rem 5rem",
  textAlign: "center",
}));

export const MainImageBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "4rem",
}));
