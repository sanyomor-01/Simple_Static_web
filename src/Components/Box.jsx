import React from 'react';

export default function Box(props) {

    console.log(props.on)
    const boxStyles = { 
        backgroungColor :props.on?  "#222222" : "none"
    }
    return (
        <div style={boxStyles} className='box'></div>
    )
}