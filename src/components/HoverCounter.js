import React from 'react'

function HoverCounter(props) {
    const {count,setCount} = props;
    return (
        <h1 onMouseEnter={setCount}>Hovered {count} times</h1>
    )
}

export default HoverCounter