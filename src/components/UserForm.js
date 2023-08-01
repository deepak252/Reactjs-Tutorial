import React from "react";
import { useInput } from "../hooks/useInput";

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submit = (e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }

    return (
        <form>
            <input 
                type = 'text'
                {...bindFirstName}
            />
            <input 
                type = 'text'
                {...bindLastName}
            />
            <input type='submit' onClick={submit}/>
        </form>    
    );
}

export default UserForm;
