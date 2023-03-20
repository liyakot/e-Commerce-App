import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  addProduct,
  deleteProduct,
  deleteAllProduct,
} from "../features/cart/CartSlice";
import { AmountButtons } from "../styles/buttons/buttons";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";

const CartPage = () => {
  const { cartProducts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let number = 0;
    cartProducts.map((item) => (number += item.quantity * item.price));
    setTotal(number.toFixed(2));
  }, [cartProducts]);

  return (
    <PageContainer>
      {cartProducts.length === 0 ? (
        <Typography variant="h4" sx={{ color: Colors.primary }}>
          Your Cart is empty
        </Typography>
      ) : (
        <>
          <Typography variant="h4" sx={{ textAlign: "center", mb: "3rem" }}>
            MY CART
          </Typography>
          <Box>
            {cartProducts.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "2rem",
                  padding: "1rem",
                }}
              >
                <CardMedia
                  sx={{ height: "20rem", width: "40vw" }}
                  image={item.image}
                />
                <CardContent sx={{ width: { xs: "90vw", md: "60vw" } }}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: "1rem", fontWeight: 600, fontSize: "1.5rem" }}
                  >
                    ${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <AmountButtons>
                    <RemoveIcon
                      onClick={() => dispatch(deleteProduct(item))}
                      aria-label="Remove one unit"
                    />

                    <Typography>{item.quantity}</Typography>
                    <AddIcon
                      onClick={() => dispatch(addProduct(item))}
                      aria-label="Add one unit"
                    />
                  </AmountButtons>

                  <Button
                    sx={{ marginLeft: "1rem" }}
                    onClick={() => dispatch(deleteAllProduct(item))}
                    aria-label="delete all units of this product"
                  >
                    <DeleteIcon color="primary" sx={{ fontSize: "2rem" }} />
                  </Button>
                </CardActions>
              </Card>
            ))}
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", marginTop: "4rem" }}
            >
              TOTAL: ${total}
            </Typography>
          </Box>
        </>
      )}
    </PageContainer>
  );
};

export default CartPage;
