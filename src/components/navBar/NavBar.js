import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/");
  };

  return (    
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="../home"
              >
                Clases
              </Link>
            </li>
            <>
              {user.role == "Profesor" ? (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="../mis-clases"
                    >
                      Mis Clases
                    </Link>
                  </li>
                </>
              ) : (
                <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="../Inscribirse">
                    Inscribirse
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="../mis-clases">
                    Mis Clases
                  </Link>
                </li>
                </>
              )}
            </>
            <li className="nav-item dropdown ms-lg-auto me-lg-5">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-display="static"
                    >                     
                      {user.name}
                    </a>
                    <ul
                      className="dropdown-menu mx-lg-0 m-auto w-25"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      
                      <li><button className="dropdown-item" onClick={logOut}>Cerrar Sesion</button></li>
                     
                    </ul>
                  </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
