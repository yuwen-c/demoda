import React from "react";
import { Outlet } from "react-router-dom";
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
} from "./navigator.styles.jsx";
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
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as="span" onClick={userSignOut}>
                SIGN OUT
              </NavLink>
            </>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
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
