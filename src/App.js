import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigator from "./routes/navigator/Navigator";
import Authentication from "./routes/authentication/Authentication.routes";
import Shop from "./routes/shop/shop";

/* routing: 
1. import Routes from "react-router-dom",
2. wrap Route with Routes  
3. define the Route path and component*/

/* add a new page:
1. defined routes in app 
2. build a page for this route
3. a link to enter the page */

/* to locate the components which always render,
like navigator bar, use nested ROUTE and <Outlet> */

/* for nested home page route, use index instead of path */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
