import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, MainImageBox } from "../styles/page/containers";
import { Typography, CardMedia, Box } from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { MyButton } from "../styles/buttons/buttons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ErrorPage = () => {
  return (
    <PageContainer>
      <MainImageBox sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ maxWidth: "30rem" }}>
          <Typography
            variant="h4"
            sx={{ color: Colors.primaryDark, mb: "2rem" }}
          >
            Work in progress...
          </Typography>
          <Typography variant="h6" sx={{ mb: { xs: "2rem" } }}>
            Our exciting new website will launch soon. Come back and check it
            out.
          </Typography>
          <Link to={"/"}>
            <MyButton
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{ marginTop: "1rem" }}
            >
              Back Home
            </MyButton>
          </Link>
        </Box>
        <CardMedia
          sx={{
            width: { xs: 400, md: 500 },
            height: { xs: 400, md: 450 },
          }}
          image="/images/Working.png"
          title="We are working on the site"
        />
      </MainImageBox>
    </PageContainer>
  );
};

export default ErrorPage;
