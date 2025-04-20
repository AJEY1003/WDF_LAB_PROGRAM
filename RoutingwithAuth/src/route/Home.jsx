import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
function Home() {
const[name,setName]=useState("");
const[password,setPassword]=useState("");
const Navigate=useNavigate();
function Login(){
if(name=="admin" && password=="123456"){
Navigate("/dashboard")}
else{
alert("Invalid Credentials")
}
}
return(
    <div>
        <label>Name:</label><br></br>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <label>Password:</label><br></br>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
        <button onClick={Login}>Login</button>
    </div>
)
}
export default Home;