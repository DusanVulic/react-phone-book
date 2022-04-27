import React, { useState, useEffect } from "react";
import classes from "./ContactList.module.css";
import { Link } from "react-router-dom";

//import user
import { useAuthContext } from "../hooks/useAuthContext";
//

//MUI arrow

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SearchList = ({ searchData }) => {
  const { user } = useAuthContext();

  const [note, setNote] = useState(false);

  useEffect(() => {
    if (searchData.length === 0) {
      setNote(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes.wrap}>
        {searchData &&
          searchData.map((data) => {
            const { id, nameData, company, email, phone, additionalInfo, uid } =
              data;

            //  conditional rendering if uid from the searced data is equal with user who created it(same user is looged in )
            if (uid === user.uid) {
              return (
                <article key={id} className={classes}>
                  <div className={classes.header}>
                    <h3 className={classes.name}>{nameData}</h3>
                  </div>

                  <div>
                    <h3>{company}</h3>
                    <p>{email}</p>

                    <p className={classes.phone}>{phone}</p>
                    <p>{additionalInfo}</p>
                  </div>
                </article>
              );
            } else {
              return (
                <p key={id} className={classes.no_contact}>
                  Sorry, no contact matched your criteria
                </p>
              );
            }
          })}
        {note && (
          <p className={classes.no_contact}>
            Sorry, no contact matched your criteria
          </p>
        )}
      </div>
      <div className={classes.back}>
        <Link to="/" className={classes.back_link}>
          <span>
            <ArrowBackIosNewIcon sx={{ transform: "translate(0px,5px)" }} />{" "}
            return to phoneBook
          </span>
        </Link>
      </div>
    </>
  );
};

export default SearchList;
