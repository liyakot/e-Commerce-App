import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/user/UserSlice";
import Orders from "../components/Orders";
import { PageContainer } from "../styles/page/container";
import { Typography, Button } from "@mui/material";
import { Output } from "@mui/icons-material";
import { Colors } from "../styles/theme/theme";

const AccountPage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <PageContainer>
      <Typography variant="h4" mb="1rem">
        Welcome,
      </Typography>
      <Typography variant="h5" color="primary" mb="2rem">
        {email}
      </Typography>
      <Orders />
      <Button
        variant="contained"
        onClick={() => dispatch(removeUser())}
        endIcon={<Output />}
        sx={{ mt: "2rem" }}
      >
        Sign out
      </Button>
    </PageContainer>
  ) : (
    <Navigate to="/login" />
  );
};

export default AccountPage;
