import React, { useState } from "react";

import classes from "./Login.module.css";

//MUI components
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

//import useLogin

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { login, error, isPending } = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
      login(email, password);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Container
        sx={{
          marginTop: "100px",
          width: "80%",
        }}
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
          className={classes.form}
        >
          <h2 className={classes.title}> Login </h2>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={emailError}
            sx={{ marginBottom: "25px" }}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            variant="outlined"
            color="primary"
            type="password"
            fullWidth
            required
            error={passwordError}
            sx={{ marginBottom: "25px" }}
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIosRoundedIcon />}
          >
            Login
          </Button>
          {error && <p>{error}</p>}
          {isPending && <p>login.....</p>}
        </form>
      </Container>
    </>
  );
};

export default Login;
