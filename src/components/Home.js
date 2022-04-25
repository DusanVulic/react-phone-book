import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";

//import useCollection

import { useCollection } from "../hooks/useCollection";
import ContactList from "./ContactList";

// import css from home.module
import classes from "./Home.module.css";
import Serchbar from "./Searchbar";

const Home = () => {
  const { user } = useAuthContext();

  const { documents, error } = useCollection("phonebook", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <>
      <Serchbar />

      <h3 className={classes.title}>
        Pozdrav {user.displayName}, ovo su tvoji kontakti:{" "}
      </h3>
      {error && <p> {error}</p>}
      {documents && <ContactList phonebookData={documents} />}
    </>
  );
};

export default Home;
