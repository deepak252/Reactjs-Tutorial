import { useEffect, useState } from "react";
import "./App.scss";

function App() {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("");

    const incrementCounter = ()=>{
        setCounter(counter+1);
    }

    const handleValueChange = (event)=>{
        setValue(event.target.value);
    }

    useEffect(()=>{
        console.log(`counter = ${counter}`);
    },[counter])

    useEffect(()=>{
        console.log(`value = ${value}`);
    },[value])

    useEffect(()=>{
        console.log(`Empty 1`);
    })

    useEffect(()=>{
        console.log(`Empty 2`);
    },[])


    return (
        <div className="app">
            <h4>Count = {counter}</h4>
            <button  name="counter" onClick={incrementCounter}>Increment Count</button>
            <br />
            <input type="text" placeholder="Enter value" value={value} onChange={handleValueChange} />
            
            <h4>Value = {value}</h4>
            
        </div>
    );
}

export default App;
