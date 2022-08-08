import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./routes/home/Home";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import Navigator from "./routes/navigator/Navigator";
import Authentication from "./routes/authentication/Authentication.routes";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/Checkout";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  // subscribe the auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
    });
    // clean up function, will be triggered when un-mount
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
