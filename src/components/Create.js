import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import classes from "./Create.module.css";

//MUI components
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

//import useFirestore

import { useFirestore } from "../hooks/useFirestore";
//

const Create = ({ uid }) => {
  //dodavanje podataka u firestore
  const { addDocument, response } = useFirestore("phonebook");
  //
  const [nameData, setNameData] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [nameDataError, setNameDataError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [additionalInfoError, setAdditionalInfoError] = useState(false);

  //redirectin user after creating phone data

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    setNameDataError(false);
    setCompanyError(false);
    setPhoneError(false);
    setEmailError(false);
    setAdditionalInfoError(false);

    if (nameData === "") {
      setNameDataError(true);
    }
    if (company === "") {
      setCompanyError(true);
    }
    if (phone === "") {
      setPhoneError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (additionalInfo === "") {
      setAdditionalInfoError(true);
    }
    if (nameData && company && phone && email && additionalInfo) {
      console.log({ nameData, company, phone, email, additionalInfo });
      addDocument({
        uid,
        nameData,
        company,
        phone,
        email,
        additionalInfo,
      });

      setNameData("");
      setCompany("");
      setPhone("");
      setEmail("");
      setAdditionalInfo("");
    }
  };

  useEffect(() => {
    if (response.success === true) {
      setTimeout(() => {
        history.push("/");
      }, 1500);
    }
    // eslint-disable-next-line
  }, [response.success]);

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
          <h2 className={classes.title}>Unesite podatke </h2>
          <TextField
            value={nameData}
            onChange={(e) => setNameData(e.target.value)}
            label="ime i prezime"
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            required
            error={nameDataError}
            sx={{ marginBottom: "25px" }}
          />

          <TextField
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            label="kompanija"
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            required
            error={companyError}
            sx={{ marginBottom: "25px" }}
          />

          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="telefon"
            variant="outlined"
            color="primary"
            type="number"
            fullWidth
            required
            error={phoneError}
            sx={{ marginBottom: "25px" }}
          />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="email"
            variant="outlined"
            color="primary"
            type="email"
            fullWidth
            required
            error={emailError}
            sx={{ marginBottom: "25px" }}
          />
          <TextField
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            label="dodatni podaci"
            multiline
            rows={4}
            fullWidth
            required
            error={additionalInfoError}
            sx={{ marginBottom: "25px" }}
          />

          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIosRoundedIcon />}
          >
            Sacuvaj
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Create;
