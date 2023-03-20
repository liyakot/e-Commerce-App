import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/UserSlice";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { provider } from "../firebase";
import { Button, Typography, Box } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Colors } from "../styles/theme/theme";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert("User Does not Exist!");
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <Box>
      <Form title="LOGIN" handleClick={handleLogin} />
      <Typography variant="subtitle2">OR</Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={handleGoogleSignIn}
        endIcon={<Google />}
        sx={{ margin: "1rem" }}
        aria-label="Sign in with"
      >
        Sign in with
      </Button>
    </Box>
  );
};

export default Login;
