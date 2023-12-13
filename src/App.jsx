import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Boxes from "./Components/Boxes"
import "./App.css"

export default function App(){
    
        return(
            <div className="container">
                <Navbar/>
                <Main/>
                <Boxes/>
            </div>
        );
    
}