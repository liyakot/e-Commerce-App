import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme/theme";

export const MyButton = styled(Button)(() => ({
  marginTop: "3rem",
  fontWeight: 600,
  fontSize: "1rem",
}));

export const AmountButtons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".3rem",
  height: "2.3rem",
  width: "6.5rem",
  border: `1px solid ${Colors.primary}`,
  borderRadius: "5px",
  cursor: "pointer",
}));
