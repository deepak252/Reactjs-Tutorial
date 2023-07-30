import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Products, { FeaturedProducts, TopProducts } from "./components/Products";
import Users from "./components/user/Users";
import Admin from "./components/user/Admin";
import UserDetails from "./components/user/UserDetails";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                {/* Relative Links dont starts with a forward slash,
                    Inherits the closest route rendered
                */}
                {/* NESTED ROUTES, INDEX */}
                <Route path="products" element={<Products />} >
                    <Route index  element={<TopProducts />}/>  {/* renders in the parent's outlet at the parent's URL */}
                    <Route path="top" element={<TopProducts />}/>
                    <Route path="featured" element={<FeaturedProducts />}/>
                </Route>
                {/* DYNAMIC ROUTES */}
                {/* <Route path="users/:userId" element={<Users />} /> */}
                {/* <Route path="users/admin" element={<Admin />} /> */}
                <Route path="users" element={<Users />} >
                    <Route path=':userId' element={<UserDetails />}/>
                    <Route path='admin' element={<Admin />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
             </Routes>
        </div>
    );
}

export default App;
