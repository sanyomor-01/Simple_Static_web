import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Box from "./Components/Box"
import boxData from "./boxData"
import "./App.css"

export default function App(){

    const [squares, setSquares] = React.useState(boxData)

    const squareElement = squares.map( square => 
        <Box key="square.id" on="square.on" />
        )

        return(
            <div className="container">
                <Navbar/>
                <Main/>
                {squareElement}
            </div>
        );
    
}