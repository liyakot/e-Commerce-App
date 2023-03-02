import React from "react";
import Products from "../components/Products";
import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  Container,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
  setSortingOption,
} from "../features/products/ProductsSlice";
import { PageContainer } from "../styles/page/container";

import { useState, useEffect } from "react";

const ProductsPage = () => {
  const filterButtons = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];

  const sortingOptions = [
    "Top Rated",
    "Price (High to Low)",
    "Price (Low to High)",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const { filteredProducts, sortingOption } = useSelector(
    (state) => state.products
  );

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    dispatch(setSortingOption(sortingOptions[index]));
    dispatch(sortProducts());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(sortProducts());
  }, [filteredProducts, sortingOption]);

  return (
    <PageContainer>
      <Typography variant="h4" sx={{ textAlign: "center", mb: "2rem" }}>
        Shop by category
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <ButtonGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          color="inherit"
          aria-label="medium secondary button group"
        >
          {filterButtons.map((button, key) => (
            <Button
              variant="contained"
              sx={{ margin: ".5rem" }}
              onClick={() => dispatch(filterProducts(button.toLowerCase()))}
              key={key}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>

        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              width: "10rem",
              height: "2.5rem",
              backgroundColor: Colors.primaryLight,
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <ListItemText
              sx={{ color: Colors.white }}
              secondary={sortingOptions[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {sortingOptions.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Products />
    </PageContainer>
  );
};

export default ProductsPage;
