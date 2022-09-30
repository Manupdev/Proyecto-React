import React, { useContext, useState } from "react";
import mock from "../../data/mock.json";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Card.css";

export default function CardClase({
  id,
  name,
  profesor,
  duracion,
  frecuencia,
  costo,
  calificacion,
  comentarios,
}) {
  const { user } = useContext(UserContext);
  const [details, setDetails] = useState(false);
  const redirect = () => {
    setDetails((current) => !current);
  };
  const Detalles = () => {
    return (
      <div>
        <p>calificacion: {calificacion}</p>        
        <div>
            <p className="p-0">Comentarios:</p>
            <div className="row">
                {comentarios.map(comentario=>(
                    <p key={comentario.id} className="p-0">Alumno: {comentario.alumno}</p>
                ))}
            </div>
        </div>
      </div>
    );
  };
  return (
    <div className="card">      
      <div className="container">
        <h4 className="display-6">
          <b>{name}</b>
        </h4>
        <h5>
          <b>{profesor}</b>
        </h5>
        <div>
          <p className="m-0">Frecuencia: {frecuencia}</p>
          <p className="m-0">Duracion: {duracion}</p>
          <p className="m-0">Costo: ${costo}</p>
        </div>
        <button onClick={redirect}>Ver detalles</button>
        {details && <Detalles />}
      </div>
    </div>
  );
}
