import React from "react";
import { UserContextProvider } from "./contexts/UserContext";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/home";
import Root from "./components/root/Root";
import SignUp from "./pages/signUp/SignUp";
import MisClases from "./pages/mis_clases/mis_clases";
import Inscripciones from "./pages/signUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mis-clases" element={<MisClases />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <UserContextProvider>
      <div className="App">
            <RouterProvider router={router} />
        <main>
          <Outlet>
          </Outlet>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
