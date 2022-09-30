import React, {useContext} from "react";
import NavBar from "../../components/navBar/NavBar"
import {UserContext} from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import "./Header.css";

export default function Header() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const logOut = () => {
        setUser(null);
        navigate("/");
    }
    return (
        <header className="header">
        
            <NavBar/>
            {user && <button onClick={logOut}>Cerrar sesión</button>}
        </header>
    );
}