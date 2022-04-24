import React, { useState } from "react";

import classes from "./SignUp.module.css";

//MUI components
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [displayNameError, setDisplayNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setEmailError(false);
    setDisplayNameError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (displayName === "") {
      setDisplayNameError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (email && password && displayName) {
      console.log(email, password, displayName);
    }
    setEmail("");
    setDisplayName("");
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
          <h2 className={classes.title}>SignUp</h2>
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

          <TextField
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            label="display name"
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            required
            error={displayNameError}
            sx={{ marginBottom: "25px" }}
          />

          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIosRoundedIcon />}
          >
            SignUp
          </Button>
        </form>
      </Container>
    </>
  );
};
export default SignUp;
