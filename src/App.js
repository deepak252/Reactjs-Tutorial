import "./App.css";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import ChildOne from "./components/optimization/ChildOne";
import { GrandParent } from "./components/optimization/GrandParent";
import ParentOne from "./components/optimization/ParentOne";
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
            {/* <ParentOne> <ChildOne /> </ParentOne> */}
            {/* <GrandParent /> */}
            <GrandParent>
                <ParentOne>
                    <ChildOne />
                </ParentOne>
            </GrandParent>
        </div>
    );
}

export default App;
