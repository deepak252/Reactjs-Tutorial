import { useState } from "react"

export const useCounter = (initialCount = 0)=>{
    const [count,setCount] = useState(initialCount);

    const increment = ()=>setCount(prev=>prev+1);
    const decrement = ()=>setCount(prev=>prev-1);

    return [count,increment,decrement];
}
