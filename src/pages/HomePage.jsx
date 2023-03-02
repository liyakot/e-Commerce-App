import React from "react";
import {
  Typography,
  Box,
  CardMedia,
  Card,
  ImageList,
  ImageListItem,
  Divider,
  CardContent,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import Products from "../components/Products";
import { PageContainer } from "../styles/page/container";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setImageList } from "../features/products/ProductsSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  let imageList = [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhY3R1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1566622219044-7948b6b7745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhY3R1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579969406275-0b37fa82deca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613461920867-9ea115fee900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <PageContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          mb: "3rem",
          padding: ".5rem",
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{ color: Colors.primaryDark, mb: "2rem" }}
          >
            A new season is coming!
          </Typography>
          <Typography variant="h4" sx={{ color: Colors.primaryLight }}>
            Check out all the trends
          </Typography>
        </CardContent>
        <CardMedia
          sx={{
            width: { xs: 400, md: 500 },
            height: { xs: 400, md: 450 },
          }}
          image="/images/background.png"
        />
      </Box>
      <Divider />

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: Colors.black,
          mb: "3rem",
          mt: "2rem",
        }}
      >
        NEW ARRIVALS
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageList.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </PageContainer>
  );
};

export default HomePage;
