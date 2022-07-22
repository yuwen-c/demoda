import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigator.scss";

/* Outlet: defined where should the wrapped components being placed. */
const Navigator = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <>
              <span>{currentUser.email}</span>
              <span className="nav-link" onClick={userSignOut}>
                sign out
              </span>
            </>
          ) : (
            <Link className="nav-link" to="/auth">
              sign in
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigator;
