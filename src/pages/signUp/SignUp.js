import React, { useContext, useState } from "react";
import mock from "../../data/mock.json";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkUser = (
    _nombre,
    _apellido,
    _email,
    _password,
    _confirmPassword,
    _rol
  ) => {
    if (_rol) {
      _rol = "Profesor";
    } else {
      _rol = "Alumno";
    }
    if (_password == _confirmPassword) {
      setPassword(_password);
      if (email.includes("@")) {
        setNombre(_nombre);
        setApellido(_apellido);
        setEmail(_email);
        setPassword(_password);
        NewUser(nombre,apellido, email, password, _rol);
      } else {
        alert("Porfavor Ingrese un email valido");
      }
    } else {
      alert("Error las contraseñas no coinciden");
    }
  };
  const NewUser = (nombre,apellido, email, password, rol) => {
    const user=({ "mail": email, "password": password, "name": nombre + " " + apellido, "role":rol});
    mock.usuarios.unshift(user)
  };
  return (
    <div className="App m-5border border-dark rounded p-5 mx-auto w-50">
      <form id="formulario">
        <h3>Sign Up</h3>
        <div className="mb-3 text-start">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            id="Nombre"
            onChange={(e) => {
              if (e.target.value!="") {
                setNombre(e.target.value);
              } else {
                setNombre("");
              }
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            id="Apellido"
            onChange={(e) => {
              if (e.target.value!="") {
                setApellido(e.target.value);
              } else {
                setApellido("");
              }
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={(e) => {
              if (e.target.value.includes("@")) {
                setEmail(e.target.value);
              } else {
                setEmail("");
              }
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            id="passwordConfirm"
            required
          />
        </div>

        <div className="form-check form-switch d-flex justify-content-center px-5">
          <p className="pe-5 h5">Alumno</p>
          <label className="switch pb-3">
            <input
              type="checkbox"
              id="checkbox1"
            />
            <span className="slider round"></span>
          </label>
          <p className="ps-5 h5">Profesor</p>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              checkUser(
                nombre,
                apellido,
                email,
                password,
                document.getElementById("passwordConfirm").value,
                document.getElementById("checkbox1").checked
              );
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
