import React from "react";
import Navbar from "../../components/navBar/NavBar";
import "./home.css";
import Clases from "../Clases/Clases";

export default function home() {
    return <div className="App">
        <Navbar/>
        <Clases/>
        
    </div>
}