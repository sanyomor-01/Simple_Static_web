import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Box from "./Components/Box"
import boxes from "./boxes"
import "./App.css"



export default function App(){

    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on} 
            toggle={() => toggle(square.id)}
         
         />
    ))


    return(
        <div className="container">
            <Navbar/>
            <Main/>
            <h1>Click on the box to toggle the background color</h1>
            {squareElements}
        </div>
    );
    
}