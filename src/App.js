import "./App.css";
import ClickCounter from "./components/ClickCounter";
import { Counter } from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
    return (
        <div className="App">
            <Counter 
                render = {
                    (count,setCount)=><ClickCounter count={count} setCount={setCount} />
                }
            />
            <Counter 
                render = {
                    (count,setCount)=><HoverCounter count={count} setCount={setCount} />
                }
            />
        </div>
    );
}

export default App;
