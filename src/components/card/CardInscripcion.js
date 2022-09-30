import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import "./CardClase.css";

export default function CardInscripcion({
  id,
  name,
  profesor1,
  duracion,
  frecuencia,
  costo,
  calificacion,
  comentarios,
  _alumnos,
}) {
  const { user, profesores, alumnos } = useUserContext();

  if (_alumnos.find((al) => al.id != user.id)) {
    
      return (
        <div key={id} className="card w-50 my-auto">
          <div className="container">
            <h4 className="display-4">
              <b>{name}</b>
            </h4>
            <div className="d-flex justify-content-center">
              <p className="mx-2 border border-danger p-2">
                Frecuencia: {frecuencia}
              </p>
              <p className="mx-2 border border-danger p-2">
                Duracion: {duracion}
              </p>
            </div>
            <p className="mx-2 border border-danger p-2">Costo: ${costo}</p>
            <div className="d-flex">
              <p>Calificacion: {calificacion}</p>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger">Inscribirme </button>
            </div>
          </div>
        </div>
      );
    
  }
}
