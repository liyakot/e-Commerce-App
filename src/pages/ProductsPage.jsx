import React from "react";
import Products from "../components/Products";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterProducts } from "../features/products/ProductsSlice";

const ProductsPage = () => {
  const filterButtons = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];

  const dispatch = useDispatch();

  return (
    <Container>
      <Typography>Shop by category</Typography>
      <ButtonGroup color="inherit" aria-label="medium secondary button group">
        {filterButtons.map((button, key) => (
          <Button
            onClick={() => dispatch(filterProducts(button.toLowerCase()))}
            key={key}
          >
            {button}
          </Button>
        ))}
      </ButtonGroup>
      <Products />
    </Container>
  );
};

export default ProductsPage;
