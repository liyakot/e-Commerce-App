import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";

const Footer = () => {
  const helpList = ["Contact us", "FAQ", "Accessibility"];
  const aboutList = ["About us", "Search our store", "Blog", "Our Story"];
  const infoList = ["Return Policy", "Terms of Service", "Privacy Policy"];
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        color: "white",
        width: "100vw",
      }}
    >
      <Box sx={{ padding: "2.5rem 2rem 2rem" }}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item>
            <Typography sx={{ fontWeight: "600", mb: ".5rem" }}>
              HELP
            </Typography>
            <List>
              {helpList.map((item, key) => (
                <ListItem key={key} sx={{ padding: ".1rem" }}>
                  <Link to="/waiting" aria-label={item}>
                    <ListItemText sx={{ color: Colors.white }} primary={item} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "600", mb: ".5rem" }}>
              ABOUT
            </Typography>
            <List>
              {aboutList.map((item, key) => (
                <ListItem key={key} sx={{ padding: ".1rem" }}>
                  <Link to="/waiting" aria-label={item}>
                    <ListItemText sx={{ color: Colors.white }} primary={item} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "600", mb: ".5rem" }}>
              INFO
            </Typography>
            <List>
              {infoList.map((item, key) => (
                <ListItem key={key} sx={{ padding: ".1rem" }}>
                  <Link to="/waiting" aria-label={item}>
                    <ListItemText sx={{ color: Colors.white }} primary={item} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: Colors.primaryDark,
          padding: ".8rem",
          textAlign: "center",
        }}
      >
        © 2023 All Rights Reserved Terms of Use and Private Policy
      </Box>
    </Box>
  );
};

export default Footer;
