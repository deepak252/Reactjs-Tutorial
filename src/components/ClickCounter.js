import { useState } from "react";

function ClickCounter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((val) => val + 1);
    };
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times </button>
        </div>
    );
}

export default ClickCounter;
