import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [profesores, setProfesores] = useState([]);
  const [alumnos, setAlumnos] = useState([]);

  return (
    <UserContext.Provider
      value={{ user, setUser, profesores, setProfesores, alumnos, setAlumnos, }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const UserContextProvider = useContext(UserContext);
  return UserContextProvider;
};
export default UserContext;
