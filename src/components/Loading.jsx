import React from "react";
import { Typography, Container } from "@mui/material";
import { Colors } from "../styles/theme/theme";

const Loading = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          color: Colors.primary,
          textAlign: "center",
          mt: "2rem",
          fontStyle: "italic",
        }}
      >
        Loading...
      </Typography>{" "}
    </Container>
  );
};

export default Loading;
