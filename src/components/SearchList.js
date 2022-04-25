import React from "react";
import classes from "./ContactList.module.css";

//import firestorea

//

const SearchList = ({ searchData }) => {
  return (
    <>
      <div className={classes.wrap}>
        {searchData &&
          searchData.map((data) => {
            const { id, nameData, company, email, phone, additionalInfo } =
              data;

            return (
              <article key={id} className={classes}>
                <div className={classes.header}>
                  <h3 className={classes.name}>{nameData}</h3>
                </div>

                <div>
                  <h3>{company}</h3>
                  <p>{email}</p>
                  <a href={"tel:" + { phone }} className={classes.phone}>
                    pozovi {phone}
                  </a>
                  <p className={classes.big_screeen_phone}>{phone}</p>
                  <p>{additionalInfo}</p>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
};

export default SearchList;
