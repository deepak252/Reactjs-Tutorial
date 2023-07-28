import React from 'react'

function ClickCounter(props) {
    const {count,setCount} = props;
    return (
        <button onClick={setCount}>Clicked {count} times</button>
    )
}

export default ClickCounter;