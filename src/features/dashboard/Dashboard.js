import {useSelector} from "react-redux";
import { Profile } from "../profile/Profile";
import Register from "../register/Register";

export function Dashboard(){
    const profile = useSelector((state)=>state.profile);

    const isSignedIn = ()=>{
        return Object.keys(profile).length===3;
    }

    return (
        <>
            {/* <Register /> */}
            {
                !isSignedIn() 
                ? <Register />
                : <Profile />
            }
        </>
    )
}
