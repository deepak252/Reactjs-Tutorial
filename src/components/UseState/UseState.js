import React, { useState } from "react";

function UseState() {
    const [count,setCount] = useState(0);

    console.log("UseState Render");

    return (
        <div>
            <h1>useState Count = {count}</h1>
            <button onClick={()=>setCount(c=>c+1)}>Increment</button>
            <button onClick={()=>setCount(0)}>Set to 0</button>
            <button onClick={()=>setCount(5)}>Set to 5</button>
        </div>
    )
}

export default UseState;
