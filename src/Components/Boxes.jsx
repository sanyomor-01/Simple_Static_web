import React from 'react';
import boxData from "../boxData"
import ".././App.css"

export default function Boxes() {

   const [squares, setSquares] = React.useState(boxData)

   const squareElement = squares.map( square => (
    <div className="box" key={square.id}></div>
   ))

    return <main className="squares">
        <h1>Boxes Will Go Here</h1>
        {squareElement}

    </main>
}