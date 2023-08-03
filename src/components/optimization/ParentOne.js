import React, { useState } from "react";

function ParentOne({children}) {
    const [count,setCount] = useState(0);

    console.log("ParentOne Render");

    return (
        <div>
            <h1>ParentOne Count = {count}</h1>
            <button onClick={()=>setCount(c=>c+1)}>ParentOne Increment</button>
            {/* <ChildOne /> */}
            {children}
        </div>
    )
}

export default ParentOne;
