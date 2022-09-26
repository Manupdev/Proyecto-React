import React, {useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import "./TeacherUserPage.css";

export default function TeacherUserPage() {
    const user = useLoaderData();
    const [visible, setVisible] = useState(false);
    const {name, position} = user;
    return <div className="card">
        <img src={require("../../assets/img_avatar.png")} alt="Avatar" style={{width: 300, height: 300}}/>
        <div className="container">
            <h1>Página detalle profesor</h1>
            <h4><b>{name}</b></h4>
            <p>{position}</p>
            <button
                onClick={() => setVisible(!visible)}>{visible ? "Ocultar contenido" : "Mostrar contenido"}</button>
            <Link to={"/home-profesor"}>Volver</Link>
            {visible && <div className="container">
                Muestro contenido oculto
            </div>}
        </div>
    </div>;
}