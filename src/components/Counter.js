import { useState } from 'react'

export const Counter = (props)=> {
    const [count,setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(prev=>prev+1);
    }
    return (
        props.children(count,incrementCount)
    );
}

