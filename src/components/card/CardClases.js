import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import "./CardClase.css";

export default function CardClase({
  id,
  name,
  profesor1,
  duracion,
  frecuencia,
  costo,
  calificacion,
  comentarios,
}) {
  const { user, profesores, alumnos } = useUserContext();
  const [details, setDetails] = useState(false);
  const redirect = () => {
    setDetails((current) => !current);
  };

  const Detalles = () => {
    const comentariosFiltrado=comentarios.filter(comentario=>comentario.estado==="Aceptado"||comentario.estado==="Finalizado")
    return (
      <div key={"detalles" + id}>
        <p className="mt-2 fw-bold ">Calificacion: {calificacion}</p>
        <div className="text-start">
          <p className="p-0">Comentarios:</p>
          {comentariosFiltrado.map((comentario) => 
            (             
              <div className="text-start mx-2 border border-warning rounded">
                <p key={"Alumno" + comentario.id} className="p-1 my-0 fw-bold">
                  Alumno: {comentario.alumno}
                </p>
                <hr className="m-1" />
                <p
                  key={"comentario" + comentario.id}
                  className="px-2 py-0 my-0"
                >
                  {comentario.comentario}
                </p>
              </div>
             
              )
          )}
        </div>
      </div>
    );
  };
  return (
    <div key={id} className="card">
      <div className="container">
        <h4 className="display-6">
          <b>{name}</b>
        </h4>
        <h5>
          <b>{profesores.find((p) => p.id == profesor1).name}</b>
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
