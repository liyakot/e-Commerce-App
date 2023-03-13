import React from "react";
import { Link } from "react-router-dom";
import Register from "../components/Register";
import { Container, Typography, Paper, Divider } from "@mui/material";
import { PageContainer } from "../styles/page/containers";

const RegisterPage = () => {
  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{ width: "20rem", margin: "0 auto", padding: "1.5rem 1rem" }}
      >
        <Typography variant="h4" mb="1rem">
          Create an Account
        </Typography>
        <Register />
        <Divider textAlign="center" />
        <Typography variant="subtitle1" mt="2rem">
          Already have an account?
          <Link to="/login"> Login</Link>
        </Typography>
      </Paper>
    </PageContainer>
  );
};

export default RegisterPage;
