import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import "./CardClase.css";
import mock from "../../data/mock.json";

export default function CardClaseFilter({
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
  const [combobox, setCombobox] = useState(false);
  const redirect = () => {
    setCombobox((current) => !current);
  };

  const Combobox = (val) => {
    const variable = val.value;
    return (
      <>
        <select
          className="form-select mb-1 w-25"
          name="select"
          id={"select" + variable + id}
        >
          <option defaultValue="Pendiente">Pendiente</option>
          <option value="Aceptado">Aceptado</option>
          <option value="Finalizada">Finalizada</option>
          <option value="Rechazado">Rechazado</option>
        </select>
        <button
          id={variable}
          className="btn btn-success"
          onClick={() => guardarEstado(val, id)}
        >
          Guardar
        </button>
      </>
    );
  };
  const checkCalificacion=(alumnoActivo)=>{
    if (alumnoActivo.estado==="Aceptado"||alumnoActivo.estado==="Finalizado"){
      console.log(document.getElementById("boton"+alumnoActivo.id+id))
    }else{
      document.getElementById("boton"+alumnoActivo.id+id).disabled=false;
    }
  }
  const guardarEstado = (val1, idClase1) => {
    const variable = val1.value;
    const selects = document.getElementById("select" + variable + idClase1);
    document.getElementById("estado" + variable + idClase1).innerHTML =
      selects.value;
    return setCombobox((current) => !current);
  };
  const controlComents = () => {
    return (
      <>
        <h3>Comentarios:</h3>
        {comentarios.map((comentario) => (
          <div className="text-start mx-2 border border-warning rounded">
            <p key={"Alumno" + comentario.id} className="p-1 my-0 fw-bold">
              Alumno: {comentario.alumno}
            </p>
            <hr className="m-1" />
            <p
              key={"comentario" + comentario.id}
              className="px-2 py-0 my-0 fst-italic fst-bold"
            >
              {comentario.comentario}
            </p>
            <div key={"estado"} className="px-2 py-2  d-flex">
              <p
                className="fw-bold text-muted py-2"
                id={"estadoa" + comentario.id}
              >
                Estado:
              </p>

              <p
                className="fw-bold text-muted py-2 px-1"
                id={"estado" + comentario.id + id}
              >
                {comentario.estado}
              </p>
              {combobox && <Combobox value={comentario.id}></Combobox>}
            </div>
          </div>
        ))}
      </>
    );
  };

  if (user.role === "Profesor") {
    if (profesor1 == user.id) {
      return (
        <div key={id} className="card w-50">
          <div className="container">
            <h4 className="display-4">
              <b>{name}</b>
            </h4>
            <section className="w-100 d-flex justify-content-end row ">
              <button className="btn btn-warning my-1">Modificar Clase</button>
              <button className="btn btn-warning my-1" onClick={redirect}>
                Modificar Comentarios
              </button>
            </section>
            <div className="d-flex justify-content-center">
              <p className="mx-2 border border-warning p-2">
                Frecuencia: {frecuencia}
              </p>

              <p className="mx-2 border border-warning p-2">
                Duracion: {duracion}
              </p>
            </div>
            <div>{controlComents()}</div>
          </div>
        </div>
      );
    }
  }

  if (user.role === "Alumno" && _alumnos.find((al) => al.id == user.id)) {
    const alumnoActivo = _alumnos.find((al) => al.id == user.id);
    /**{alumnoActivo.estado==="Aceptado"}?({<button enabled id={"boton"+alumnoActivo.id+id} className="btn btn-danger">Modificar</button>}):({<button disabled id={"boton"+alumnoActivo.id+id} className="btn btn-danger">Modificar</button>}); */
    if (alumnoActivo.id == user.id) {
      return (
        <div key={id} className="card w-50">
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
            <p className="mx-2 border border-danger p-2">
              Estado: {alumnoActivo.estado}
            </p>
            <div className="d-flex">
              <p>Calificacion: {calificacion}</p> 
           </div>
           <div className="d-flex">
              <p>Comentario: </p> 
           </div>
          </div>
        </div>
      );
    }
  }
}
