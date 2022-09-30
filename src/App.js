import React from "react";
import { UserContextProvider } from "./contexts/UserContext";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/home";
import Root from "./components/root/Root";
import SignUp from "./pages/signUp/SignUp";
import MisClases from "./pages/mis_clases/mis_clases";
import Inscripcion from "./pages/inscripciones/inscripciones";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mis-clases" element={<MisClases />} />
        <Route path="/Inscribirse" element={<Inscripcion />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <UserContextProvider>
      <div className="App">
            <RouterProvider router={router} />
      </div>
    </UserContextProvider>
  );
}

export default App;
