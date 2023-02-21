import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <Box>
        {/* <CardMedia
          sx={{ height: "90vh", width: "100%" }}
          image="/images/top-view-black-friday-sales-assortment-with-copy-space.jpg"
        /> */}
        Media
      </Box>
      <Box
        sx={{
          marginTop: "-90vh",
          color: "white",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">A new season is coming!</Typography>
        <Typography variant="h3">Check out all the trends</Typography>
      </Box>
      <Typography>Latest Products</Typography>
      <Products />
    </>
  );
};

export default HomePage;
