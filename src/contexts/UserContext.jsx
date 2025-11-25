import { createContext, useContext, useState } from "react"; 
import { useNavigate } from "react-router"; 

export const UserContext = createContext(); 

export function UserProvider({ children }) { 
    const [user, setUser] = useState( 
        JSON.parse(localStorage.getItem("user")) || null 
    ); 
    const navigate = useNavigate();

    function login(userData) { 
        localStorage.setItem("user", JSON.stringify(userData)); 
        setUser(userData); 
        navigate("/profile"); 
    } 

    function logout(){
        localStorage.removeItem("user");
        setUser(null)
        navigate("/auth");
    }

    return ( 
        <UserContext.Provider value={{ user, login, logout }}> 
            {children} 
        </UserContext.Provider> 
    ); 
} 