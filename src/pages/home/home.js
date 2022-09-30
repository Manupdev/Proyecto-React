import React from "react";
import Navbar from "../../components/navBar/NavBar";
import "./home.css";
import Grid from "../../components/grid/Grid";
import mock from "../../data/mock.json"
import CardClases from "../../components/card/CardClases";

export default function home() {
    
    return <div className="App">
        <Navbar/>   
        <Grid>                       
            {            
            mock.clases.map(clase => (                
               <CardClases key={clase.id} id={clase.id} name={clase.nombreMateria} profesor1={clase.profesor} duracion={clase.duracion} frecuencia={clase.frecuencia} costo={clase.costo} calificacion={clase.calificacion} comentarios={clase.comentarios}/>
            ))
        }
        </Grid>  
    </div>
}