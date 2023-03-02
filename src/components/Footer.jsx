import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
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
            <List>
              <Typography sx={{ fontWeight: "600", mb: "1rem" }}>
                HELP
              </Typography>
              {helpList.map((item) => (
                <ListItem sx={{ padding: ".1rem" }}>
                  <Link to="/waiting">
                    <ListItemText sx={{ color: Colors.white }} primary={item} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <List>
              <Typography sx={{ fontWeight: "600", mb: "1rem" }}>
                ABOUT
              </Typography>
              {aboutList.map((item) => (
                <ListItem sx={{ padding: ".1rem" }}>
                  <Link to="/waiting">
                    <ListItemText sx={{ color: Colors.white }} primary={item} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <List>
              <Typography sx={{ fontWeight: "600", mb: "1rem" }}>
                INFO
              </Typography>
              {infoList.map((item) => (
                <ListItem sx={{ padding: ".1rem" }}>
                  <Link to="/waiting">
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
