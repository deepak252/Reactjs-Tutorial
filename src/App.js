import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
    return (
        <div className="App">
            <ClickCounter />
            <HoverCounter name="Deepak"/>
        </div>
    );
}

export default App;
