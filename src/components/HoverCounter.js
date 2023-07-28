import { useState } from "react";

function HoverCounter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((val) => val + 1);
    };
    return (
        <div>
            <h1 onMouseEnter={incrementCount}>Hovered {count} times </h1>
        </div>
    );
}

export default HoverCounter;
