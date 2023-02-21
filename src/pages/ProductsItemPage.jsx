import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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
import { getProduct } from "../features/productsItem/ProductsItemSlice";

const ProductsItemPage = () => {
  /*  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(await response.data);
      setLoading(false);
    };

    getProduct();
  }, []); */

  const dispatch = useDispatch();
  const { product, error, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

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
              <Typography variant="h5">{product.category}</Typography>
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="h6">
                Rating {product.rating && product.rating.rate}
              </Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="h4">${product.price}</Typography>
              {/* {product.quantity === 0 ? <Button>Buy</Button> : {<RemoveCircleOutlineIcon
                  onClick={() => dispatch(deleteProduct(product))}
                />
                <Typography>{product.quantity}</Typography>
                <AddCircleOutlineIcon
                  onClick={() => dispatch(addProduct(product))}
                />}} */}

              <Button onClick={() => dispatch(addProduct(product))}>Buy</Button>

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
