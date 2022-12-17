import React, { useState } from "react";
import Reorder from "./Reorder";
import './app.css'

function App() {
    const [count, setCount] = useState(0);
    console.log(count);

    return (
        <div className="app">
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>ADD</button>
            <button className="btn" disabled={!count} onClick={() => setCount(count - 1)}>SUBTRACT</button>
            { count === 0
            ?
                <Reorder value={count} setCount = {setCount} />
            :
            null}
        </div>

    );
}

export default App;
