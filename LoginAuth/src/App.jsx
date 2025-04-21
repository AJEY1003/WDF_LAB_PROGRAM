import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Navbar from "./routes/Navbar";
import Sigin from "./routes/Sigin";
function App(){
  return(
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signin" element={<Sigin/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;