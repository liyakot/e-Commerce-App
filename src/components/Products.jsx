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
import Error from "./Error";
import { Colors } from "../styles/theme/theme";
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
      <Grid container spacing={3} sx={{ mt: "2rem" }} justifyContent="center">
        {(filteredProducts.length !== 0 ? filteredProducts : products)?.map(
          (product) => (
            <Grid item key={product.id}>
              <Card sx={{ maxWidth: 500, width: 300, height: 400 }}>
                <CardActionArea
                  onClick={() => dispatch(displayProduct(product))}
                >
                  <Link to={`/products/${product.id}`}>
                    <CardMedia
                      sx={{ height: 250, width: 200, margin: "0 auto" }}
                      image={product.image}
                      title={product.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: Colors.grayDark, mt: ".5rem" }}
                      >
                        {product.title.substring(0, 20)}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: Colors.black,
                          mt: "1rem",
                          fontWeight: "600",
                        }}
                      >
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
    );
  };

  return (
    <>
      <Container>
        {loading ? <Loading /> : error !== "" ? <Error /> : <ShowProducts />}
      </Container>
    </>
  );
};

export default Products;
