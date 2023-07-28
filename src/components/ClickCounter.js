import withCounter from "./withCounter";

function ClickCounter(props) {
    
    return (
        <div>
            <button onClick={props.incrementCount}> Clicked {props.count} times </button>
        </div>
    );
}
// Export with UpdatedComponent HOC
export default withCounter(ClickCounter);
