import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigator.scss";

/* Outlet: defined where should the wrapped components being placed. */
const Navigator = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigator;
