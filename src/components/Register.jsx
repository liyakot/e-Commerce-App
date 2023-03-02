import Form from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/user/UserSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Incorrect Data Entered!"));
  };

  return (
    <>
      <Form title="SIGN UP" handleClick={handleRegister} />
    </>
  );
};

export default Register;
