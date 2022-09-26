import React from "react";
import Grid from "../../components/grid/Grid";
import mock from "../../data/mock.json";
import Card from "../../components/card/Card";
import "./StudentHomePage.css";

export default function StudentHomePage() {
    return <div className="App">
        <h1>Home Alumno</h1>
        <Grid>
            {mock.users.map(user => (
                <Card key={user.id} id={user.id} name={user.name} position={user.position}/>
            ))}
        </Grid>
    </div>
}