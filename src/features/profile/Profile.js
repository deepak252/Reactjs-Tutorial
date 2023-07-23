import {useSelector} from "react-redux";

export function Profile(){
    const user = useSelector((state)=>state.profile.value);
    // if(!user){
    //     return;
    // }
    return (
        <>
            <div>
                <p> Name : {user.name}</p>
                <p> Email : {user.email}</p>
                <p> Phone : {user.phone}</p>
            </div>
        </>
    )
}
