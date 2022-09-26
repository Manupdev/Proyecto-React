import React, {useState} from "react";
import {UserContext} from "./contexts/UserContext";
import {
    Route,
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import StudentUserPage from "./pages/studentUsers/StudentUserPage";
import mock from "./data/mock.json";
import StudentHomePage from "./pages/studentHome/StudentHomePage";
import LoginPage from "./pages/login/LoginPage";
import TeacherHomePage from "./pages/teacherHome/TeacherHomePage";
import Root from "./components/root/Root";
import TeacherUserPage from "./pages/teacherUsers/TeacherUserPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root/>}>
                <Route index element={<LoginPage/>}/>
                <Route path="/home-profesor" element={<TeacherHomePage/>}/>
                <Route path="/home-alumno" element={<StudentHomePage/>}/>
                <Route path="users/:userId" element={<TeacherUserPage/>}
                       loader={({params}) => mock.users.find(user => user.id === Number(params.userId))}/>
                <Route path="students/:studentId" element={<StudentUserPage/>}
                       loader={({params}) => mock.students.find(student => student.id === Number(params.studentId))}/>
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
