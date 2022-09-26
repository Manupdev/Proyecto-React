import React from "react";

export default function Title(props) {
    const {name} = props;
    // equivalente a const name = props.name
    return <h1 className="title">Bienvenidos a la página de {name}</h1>
}