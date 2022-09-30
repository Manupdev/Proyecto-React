import React, {useState} from "react";
import {UserContext} from "./contexts/UserContext";
import {
    Route,
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import StudentHomePage from "./pages/studentHome/StudentHomePage";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/home";
import Root from "./components/root/Root";
import Clases from "./pages/Clases/Clases";
import SignUp from "./pages/signUp/SignUp"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root/>}>
                <Route index element={<LoginPage/>}/>                
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/clases" element={<Clases/>}/>
            </Route>
        </>
    )
);

function App() {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{user, setUser}}>
            <RouterProvider router={router}/>
        </UserContext.Provider>
    );
}

export default App;
