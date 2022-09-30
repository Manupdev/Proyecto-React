import React, {useContext, useState} from "react";
import mock from "../../data/mock.json";
import {UserContext} from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";
import { Link } from "react-router-dom"; 

export default function LoginPage() {
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    return <div className="App m-5 border border-dark rounded p-5">
        <form className='m-8'>
        <div className="mb-3">
          <label>Email address</label>          
          <input
            type="email"
            name="role"
            className="form-control"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center py-1">
        <button className="w-25 btn btn-primary" onClick={() => {
            const user = mock.loginUsers.find(user => user.mail === email)
            if (user && user.password==password) {
                setUser(user);
                navigate("/home");
            } else {
                alert("Usuario no registrado")
            }

        }}>Iniciar sesión
        </button>
        </div>
        <p className="text-right py-2">
          ¿No estas registrado?  <Link to={"../SignUp"}>Registrate!</Link>
        </p>
        </form>
        


    </div>
}