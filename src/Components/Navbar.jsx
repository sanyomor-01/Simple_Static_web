import React from "react"
import logo from "../images/react-icon-small.png"


export default function Navbar() {
    return (
        <nav className="nav">
            <div className="logo-brand">
                <img src={logo} alt="react png" width="40px" />
                <span>ReactFacts</span>
            </div>
            <h3>React Course -Project 1</h3>
        </nav>
    )
}
