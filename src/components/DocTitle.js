import { useCounter } from "../hooks/useCounter";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function DocTitle() {
    const [count,increment,decrement] = useCounter();
    useDocumentTitle(count);

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increment}>Increment</button>    
            <button onClick={decrement}>Decrement</button>  
        </div>  
    );
}

export default DocTitle;
