import React, {useContext, useState} from "react";
import mock from "../../data/mock.json";
import {UserContext} from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    return <div className="App">
        <h4>No hay un usuario loggeado</h4>
        <button onClick={() => {
            const user = mock.loginUsers.find(user => user.mail === email)
            if (user) {
                setUser(user);
                navigate(user.role === "TEACHER" ? "/home-profesor" : "/home-alumno");
            } else {
                alert("Usuario no registrado")
            }

        }}>Iniciar sesión
        </button>
        <input
            type="text"
            name="role"
            onChange={e => setEmail(e.target.value)}
            value={email}
        />
    </div>
}