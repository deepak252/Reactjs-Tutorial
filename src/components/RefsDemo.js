import React, { useEffect,createRef } from "react";

function RefsDemo() {
    const inputRef = createRef();

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    },[]);

    const btnClickHandler = ()=>{
        alert(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={btnClickHandler}>Click</button>
        </div>
    );
}

export default RefsDemo;
