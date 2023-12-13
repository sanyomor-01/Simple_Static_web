import React from "react"

export default function Box(props) {
   const [on, setOn] =React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
        cursor: "pointer"
    }


    return (
        <main className="squares">
            <div style={styles} className="box" onClick={() => props.toggle(props.id)}></div>
        </main>
    )
}