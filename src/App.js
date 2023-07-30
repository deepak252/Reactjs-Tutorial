import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Products, { FeaturedProducts, TopProducts } from "./components/Products";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} >
                    <Route index  element={<TopProducts />}/>  {/* renders in the parent's outlet at the parent's URL */}
                    <Route path="top" element={<TopProducts />}/>
                    <Route path="featured" element={<FeaturedProducts />}/>
                </Route>
                <Route path="*" element={<PageNotFound />} />
             </Routes>
        </div>
    );
}

export default App;
