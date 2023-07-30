import {createContext,useState, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = (props)=>{

    const [user,setUser] = useState(null);

    const login = username=>{
        setUser(username);
    }
    const logout = () =>{
        setUser(null);
    }

    return <AuthContext.Provider value={{user,login,logout}}>
        {props.children}
    </AuthContext.Provider>
}

export const useAuth = ()=> {
    return useContext(AuthContext);
}
