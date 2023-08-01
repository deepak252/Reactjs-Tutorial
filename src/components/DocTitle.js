import {useState} from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function DocTitle() {
    const [count,setCount] = useState(0);
    useDocumentTitle(count);

    return (
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>    
    );
}

export default DocTitle;
