import {useState} from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

export const GrandParent = ({children}) => {
    const [count,setCount] = useState(0);


    console.log("GrandParent Render");
    return (
        <div>
            <h1>GrandParent Count = {count}</h1>
            <button onClick={()=>setCount(c=>c+1)}>GrandParent Increment</button>
            {children}
            {/* <ParentOne>
                <ChildOne />
            </ParentOne> */}
        </div>
    );
};
