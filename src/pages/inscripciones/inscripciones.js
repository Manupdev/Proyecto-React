import React from "react";
import Navbar from "../../components/navBar/NavBar";
import Grid from "../../components/grid/Grid";
import mock from "../../data/mock.json"
import CardInscripcion from "../../components/card/CardInscripcion";

export default function Inscribirse() {    
    return <div className="App">
        <Navbar/>   
        <Grid>                       
            {            
            mock.clases.map(clase => (                
               <CardInscripcion key={clase.id} id={clase.id} name={clase.nombreMateria} profesor1={clase.profesor} duracion={clase.duracion} frecuencia={clase.frecuencia} costo={clase.costo} calificacion={clase.calificacion} comentarios={clase.comentarios} _alumnos={clase.alumnos}/>
            ))
        }
        </Grid>  
    </div>
}