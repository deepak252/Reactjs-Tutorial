import withCounter from "./withCounter";

function HoverCounter(props) {
    console.log(props);
    return (
        <div>
            <h1 onMouseEnter ={props.incrementCount}>Hovered {props.name} {props.count} times</h1>
        </div>
    );
}

// Export with UpdatedComponent HOC
export default withCounter(HoverCounter);
