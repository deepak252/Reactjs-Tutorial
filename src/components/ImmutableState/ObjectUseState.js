import { useState } from "react";

const initialState = {
    id: 1,
    name: "Deepak",
};

function ObjectUseState() {
    const [user, setUser] = useState(initialState);

    const handleUpdateUser = () =>{
        // user.id=2;
        // user.name=123;
        // setUser(user);

        let temp = {...user};
        temp.id = 2;
        temp.name = "Dp"
        setUser(temp);
    }
    console.log("ObjectUseState Render");

    return (
        <div>
            <h1>
                {user.id} {user.name}
            </h1>
            <button onClick={handleUpdateUser}>Update User</button>

        </div>
    );
}

export default ObjectUseState;
