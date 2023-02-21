import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  MenuItem,
  Menu,
  ButtonGroup,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* import MenuIcon from "@mui/icons-material/Menu"; */

const Navbar = () => {
  const mainPages = ["home", "products"];
  const state = useSelector((state) => state.cart.products);

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Logo
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {mainPages.map((page) => (
                <Link key={page} to={`/${page === "home" ? "" : page}`}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <ButtonGroup
              color="inherit"
              aria-label="medium secondary button group"
            >
              <Link to={`/cart`}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {`cart(${state.length})`}
                </Button>
              </Link>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
