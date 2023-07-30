import { Outlet, NavLink } from "react-router-dom";

function Users() {
    return (
        <>
            <div>
                <NavLink style={{padding : '8px'}} to={"1"}>User 1</NavLink>
                <NavLink style={{padding : '8px'}} to={"2"}>User 2</NavLink>
            </div>
            <Outlet />
        </>
    );
}

export default Users;
