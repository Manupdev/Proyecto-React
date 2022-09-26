import React, {useContext} from "react";
import Title from "../title/Title";
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
    return (<header className="header">
            <Title name={user?.name || "Invitado"}/>
            {user && <button onClick={logOut}>Cerrar sesión</button>}
        </header>
    );
}