import "./App.css";
import ClickCounter from "./components/ClickCounter";
import { Counter } from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
    return (
        <div className="App">
            <Counter>
                {
                    (count,setCount)=><ClickCounter count={count} setCount={setCount} />
                }
            </Counter>
            <Counter>
                {
                    (count,setCount)=><HoverCounter count={count} setCount={setCount} />
                }
            </Counter>
        </div>
    );
}

export default App;
