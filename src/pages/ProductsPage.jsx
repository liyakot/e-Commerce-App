import React from "react";
import Products from "../components/Products";
import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
  setSortingOption,
} from "../features/products/ProductsSlice";
import { PageContainer } from "../styles/page/containers";

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

  const [sortingValue, setSortingValue] = useState("Top Rated");

  const dispatch = useDispatch();
  const { filteredProducts, sortingOption } = useSelector(
    (state) => state.products
  );

  const handleChange = (event) => {
    setSortingValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setSortingOption(sortingValue));
    dispatch(sortProducts());
  }, [filteredProducts, sortingOption, sortingValue]);

  useEffect(() => {
    dispatch(setSortingOption("Top Rated"));
  }, []);

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
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <ButtonGroup
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          color="primary"
          aria-label="medium secondary button group"
        >
          {filterButtons.map((button, key) => (
            <Button
              variant="contained"
              sx={{ margin: ".5rem" }}
              onClick={() => dispatch(filterProducts(button.toLowerCase()))}
              key={key}
              aria-label={button}
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
        <FormControl
          sx={{ width: "13rem", margin: { xs: ".5rem" } }}
          size="small"
        >
          <Select
            value={sortingValue}
            displayEmpty
            onChange={handleChange}
            sx={{ padding: "" }}
          >
            {sortingOptions.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              width: "10rem",
              height: "2.35rem",
              backgroundColor: Colors.primaryLight,
              textAlign: "center",
              borderRadius: "4px",
              color: Colors.white,
            }}
          >
            <ListItemText
              secondary={sortingOptions[selectedIndex]}
              sx={{ color: Colors.white }}
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
        </Menu> */}
      </Box>
      <Products />
    </PageContainer>
  );
};

export default ProductsPage;
