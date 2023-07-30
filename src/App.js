import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}/>
                <Route path="login" element={<Login />}/>
            </Routes>
        </div>
    );
}

export default App;
