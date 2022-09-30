import React, { useState } from "react";
import CardClaseFilter from "../../components/card/CardClaseFilter";
import Grid from "../../components/grid/Grid";
import NavBar from "../../components/navBar/NavBar";
import mock from "../../data/mock.json";

const misClases = () => { 
    return (
    <div>
      <NavBar />
      <Grid>
        {mock.clases.map((clase) => (
          <CardClaseFilter
            key={clase.id}
            id={clase.id}
            name={clase.nombreMateria}
            profesor1={clase.profesor}
            duracion={clase.duracion}
            frecuencia={clase.frecuencia}
            costo={clase.costo}
            calificacion={clase.calificacion}
            comentarios={clase.comentarios}
            _alumnos={clase.alumnos}
          />
        ))}
      </Grid>
    </div>
  );
}

export default misClases;