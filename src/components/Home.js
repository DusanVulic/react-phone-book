import React from "react";

import { useAuthContext } from "../hooks/useAuthContext";

// import css from home.module
import classes from "./Home.module.css";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <>
      <h3 className={classes.title}>
        Pozdrav {user.displayName}, ovo su tvoji kontakti:{" "}
      </h3>
    </>
  );
};

export default Home;
