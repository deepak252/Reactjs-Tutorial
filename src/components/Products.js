import "./Products.css";
import {NavLink, Outlet} from "react-router-dom";

function Products() {
    return (
        <>
            <div>Products</div>
            <nav className="nav--products">
                <NavLink to = "top">
                    Top
                </NavLink>
                <NavLink to = "featured">
                    Featured
                </NavLink>
            </nav>
            <Outlet /> {/* <Outlet> is used in parent route elements to render their matching child route elements.  */}
            
            
        </>
    )
}

export const TopProducts = ()=>{
    return (
        <div> Top Products</div>
    )
}

export const FeaturedProducts = ()=>{
    return (
        <div> Featured Products</div>
    )
}

export default Products;
