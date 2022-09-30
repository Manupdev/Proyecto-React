import React from "react";
import Grid from "../../components/grid/Grid";
import mock from "../../data/mock.json";
import Card from "../../components/card/Card";
import Navbar from "../../components/navBar/NavBar";
import "./TeacherHomePage.css";

export default function TeacherHomePage() {
    return <div className="App">
        <Navbar/>
        <h1>Home Profesor</h1>
        <Grid>
            {mock.users.map(user => (
                <Card key={user.id} id={user.id} name={user.name} position={user.position}/>
            ))}
        </Grid>
    </div>
}