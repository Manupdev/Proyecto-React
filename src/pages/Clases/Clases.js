import React, {useState} from "react";
import mock from "../../data/mock.json";
import Card from "../../components/card/Card";
import Grid from "../../components/grid/Grid";
import "./Clases.css";

export default function Clases() {
    return <div className="">
        <Grid>
            {mock.clases.map(clase => (
                <Card key={clase.id} id={clase.id} name={clase.nombreMateria} profesor={clase.profesor} duracion={clase.duracion} frecuencia={clase.frecuencia} costo={clase.costo} calificacion={clase.calificacion} comentarios={clase.comentarios}/>
            ))}
        </Grid>
    </div>;
}