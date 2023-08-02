import "./App.css";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import Parent from "./components/ParentChild/Parent";
import UseReducer from "./components/UseReducer/UseReducer";
import UseState from "./components/UseState/UseState.js";

function App() {
    console.log("App Render");
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <UseReducer /> */}
            {/* <ObjectUseState /> */}
            <Parent />
        </div>
    );
}

export default App;
