import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Error = () => {
  const { error } = useSelector((state) => state.products);

  return (
    <Typography
      variant="h3"
      sx={{ color: "red", textAlign: "center", mt: "2rem" }}
    >
      {error}
    </Typography>
  );
};

export default Error;
