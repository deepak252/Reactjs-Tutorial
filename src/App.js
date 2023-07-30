import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="login" element={<Login />}/>
            </Routes>
        </div>
    );
}

export default App;
