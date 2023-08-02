import "./App.css";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import UseReducer from "./components/UseReducer/UseReducer";
import UseState from "./components/UseState/UseState.js";

function App() {
    console.log("App Render");
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <UseReducer /> */}
            <ObjectUseState />
        </div>
    );
}

export default App;
