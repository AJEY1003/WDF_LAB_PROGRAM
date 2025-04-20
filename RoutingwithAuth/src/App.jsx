import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import Dashboard from "./route/Dashboard";
import Navbar from "./route/Navbar";
function App(){
  return(
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
};
export default App;