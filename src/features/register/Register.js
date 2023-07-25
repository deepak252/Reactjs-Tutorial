// import {setProfile} from "../profile/profileSlice";
import {setProfile} from "../profile/profileAction";
import {useDispatch}  from "react-redux";
import {useState} from "react";
import "./Register.scss";

const Register = ()=>{
    const [formValues, setFormValues] =  useState({
        name : "", email : "", phone : ""
    })
    const dispatch = useDispatch();

    const handleFormChange = (event)=>{
        const {name,value} = event.target;
        setFormValues({
            ...formValues,
            [name] : value
        })
    }

    const registerUser = (event)=>{
        event.preventDefault();
        console.log(formValues);
        dispatch(setProfile(formValues))
    }

    return (
        <>
            <form className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    onChange={handleFormChange}
                    value = {formValues.name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleFormChange}
                    value = {formValues.email}
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Enter phone"
                    onChange={handleFormChange}
                    value = {formValues.phone}
                />
                <button onClick={registerUser} >Register</ button>
            </form>
        </>
    );
}

export default Register;