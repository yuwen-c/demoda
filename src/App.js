import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

/* routing: 
1. import Routes from "react-router-dom",
2. wrap Route with Routes  
3. define the Route path and component*/

function App() {
  return (
    <Routes>
      <Route path="/index" element={<Home />} />
    </Routes>
  );
}

export default App;
