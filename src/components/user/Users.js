import { Outlet, NavLink, useSearchParams } from "react-router-dom";

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter')==='active';
    
    return (
        <>
            <button onClick={()=>setSearchParams({})}>All</button>
            <button onClick={()=>setSearchParams({filter : 'active'})}>Active</button>
            {
                showActiveUsers&&<div>Active Users</div>
            }
            <div>
                <NavLink style={{padding : '8px'}} to={"1"}>User 1</NavLink>
                <NavLink style={{padding : '8px'}} to={"2"}>User 2</NavLink>
                <NavLink style={{padding : '8px'}} to={"3"}>User 3</NavLink>
            </div>
            <Outlet />
        </>
    );
}

export default Users;
