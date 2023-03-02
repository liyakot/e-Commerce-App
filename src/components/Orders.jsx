import React from "react";
import { Typography, Card, Paper } from "@mui/material";
import { Colors } from "../styles/theme/theme";

const Orders = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: "1.5rem",
          maxWidth: { xs: "90vw", md: "70vw" },
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" textAlign="left">
          My Orders
        </Typography>
        <Typography
          mt="1rem"
          sx={{ color: Colors.grayLight }}
          variant="subtitle1"
        >
          You have no orders yet
        </Typography>
      </Paper>
    </>
  );
};

export default Orders;
