import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigator from "./routes/navigator/Navigator";

/* routing: 
1. import Routes from "react-router-dom",
2. wrap Route with Routes  
3. define the Route path and component*/

/* to locate the components which always render,
like navigator bar, use nested ROUTE and <outlet> */

/* for nested home page route, use index instead of path */

const Shop = () => {
  return <h1>I'm the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
