import React from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../styles/page/container";
import { Typography, CardMedia, Box } from "@mui/material";
import { Colors } from "../styles/theme/theme";

const ErrorPage = () => {
  return (
    <PageContainer
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "30rem" }}>
        <Typography
          variant="h4"
          sx={{ color: Colors.primary, textAlign: "center", mb: "2rem" }}
        >
          Work in progress...
        </Typography>
        <Typography variant="h6" sx={{ mb: { xs: "2rem" } }}>
          Our exciting new website will launch soon. Come back and check it out.
        </Typography>
      </Box>
      <CardMedia
        sx={{
          width: { xs: 400, md: 500 },
          height: { xs: 400, md: 450 },
        }}
        image="/images/Working.png"
        title="We are working on the site"
      />
    </PageContainer>
  );
};

export default ErrorPage;
