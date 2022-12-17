import React, { useState } from "react";
import './app.css'

function Reorder(props) {
    console.log(props.value);

    return (
        <button className="btn_1" onClick={() => props.setCount(5) }>Reorder</button>
    )
}

export default Reorder;