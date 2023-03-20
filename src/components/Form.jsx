import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="monikaGeller@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick(email, password)}
          sx={{ mb: ".5rem" }}
          aria-label={title}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};

export default Form;
