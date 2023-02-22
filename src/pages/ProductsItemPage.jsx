import React from "react";
import Loading from "../components/Loading";
import {
  Box,
  Stack,
  CardMedia,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/cart/CartSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ProductsItemPage = () => {
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.products);
  const { cartProducts } = useSelector((state) => state.cart);
  const productQuantity = cartProducts?.find((item) => item.id === product.id);
  const quantity = productQuantity?.quantity;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error !== "" ? (
        <Typography>{error}</Typography>
      ) : (
        <Container>
          <Stack direction="row">
            <CardMedia
              sx={{ height: "auto", width: "50vw" }}
              image={product.image}
            />
            <Box>
              <Typography variant="h5" onClick={() => console.log(quantity)}>
                {product.category}
              </Typography>
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="h6">
                Rating {product.rating && product.rating.rate}
              </Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="h4">${product.price}</Typography>

              {quantity ? (
                <Box>
                  <RemoveCircleOutlineIcon
                    onClick={() => dispatch(deleteProduct(product))}
                  />

                  <Typography>Quantity: {quantity ? quantity : 0}</Typography>
                  <AddCircleOutlineIcon
                    onClick={() => dispatch(addProduct(product))}
                  />
                </Box>
              ) : (
                <Button onClick={() => dispatch(addProduct(product))}>
                  Buy
                </Button>
              )}

              <Link to={"/cart"}>
                <Button variant="contained">Go to Cart</Button>
              </Link>
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default ProductsItemPage;
