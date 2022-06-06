import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import React from "react";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link
              to="/welcome"
              className={(isActive) => isActive && classes.active}
            >
              welcome
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={(isActive) => isActive && classes.active}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
