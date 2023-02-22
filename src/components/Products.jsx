import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Container,
} from "@mui/material";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/ProductsSlice";
import { displayProduct } from "../features/products/ProductsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, filteredProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const ShowProducts = () => {
    return (
      <Container>
        <Grid container spacing={2} sx={{ mt: "2rem" }}>
          {(filteredProducts.length !== 0 ? filteredProducts : products)?.map(
            (product) => (
              <Grid item key={product.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea
                    onClick={() => dispatch(displayProduct(product))}
                  >
                    <Link to={`/products/${product.id}`}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={product.image}
                        title={product.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title.substring(0, 20)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          $ {product.price}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    );
  };

  return (
    <>
      <Container>
        {loading ? (
          <Loading />
        ) : error !== "" ? (
          <Typography>{error}</Typography>
        ) : (
          <ShowProducts />
        )}
      </Container>
    </>
  );
};

export default Products;
