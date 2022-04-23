//import style from navbar css
import "./Navbar.css";

//import links data
import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // do I have a user ?  -- sa ovim kondiciono renderujem navigaciju
  const [user, setUser] = useState(true);
  //
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const showLinksHandler = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 15}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>logo</h2>
          <div
            className={`${showLinks ? "menu-toggle is-active" : "menu-toggle"}`}
            onClick={() => showLinksHandler()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link
                to="/signup"
                className="nav-link"
                onClick={() => setShowLinks(false)}
              >
                signUp
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="nav-link"
                onClick={() => setShowLinks(false)}
              >
                login
              </Link>
            </li>

            {user && (
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setShowLinks(false)}
                >
                  phoneBook
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link
                  to="/create"
                  className="nav-link"
                  onClick={() => setShowLinks(false)}
                >
                  create
                </Link>
              </li>
            )}
            {user && (
              <li>
                <button className="btn">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
