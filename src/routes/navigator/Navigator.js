import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartIsOpenSelector } from "../../store/cart/cart.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context_useReducer";
// import { CartContext } from "../../contexts/cart.context_useReducer";
import { userSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from "./navigator.jsx";
import { selectCurrentUser } from "../../store/user/user.selector";

/* Outlet: defined where should the wrapped components being placed. */
const Navigator = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(cartIsOpenSelector);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinkContainer>
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <>
              <span>{currentUser.email}</span>
              <NavLink as="span" onClick={userSignOut}>
                sign out
              </NavLink>
            </>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigator;
