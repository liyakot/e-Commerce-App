import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { addProduct, deleteProduct } from "../features/cart/CartSlice";

const CartPage = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      {cartProducts.length === 0 ? (
        <Typography>Your Cart is empty</Typography>
      ) : (
        cartProducts.map((item) => (
          <Card key={item.id} sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              sx={{ height: "20rem", width: "40vw" }}
              image={item.image}
            />
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="h6">
                {`${item.quantity} x ${item.price} = $${
                  item.quantity * item.price
                }`}
              </Typography>
              <RemoveCircleOutlineIcon
                onClick={() => dispatch(deleteProduct(item))}
              />
              <Typography>{item.quantity}</Typography>
              <AddCircleOutlineIcon
                onClick={() => dispatch(addProduct(item))}
              />
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default CartPage;
