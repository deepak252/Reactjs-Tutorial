import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [count,setCount] = useState(0);

    console.log("Parent Render");

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={()=>setCount(c=>c+1)}>Increment</button>
            <button onClick={()=>setCount(0)}>Set to 0</button>
            <button onClick={()=>setCount(5)}>Set to 5</button>
            <Child />
        </div>
    )
}

export default Parent;
