import React from "react"; // Ya no es necesario importar
import ReactDOM from "react-dom";
import App from "./App";

//funcion que resive 2 parametros ( 1. JSX que queremos cargar/ 2. Selector de etiqueta donde queremos cargarlos )
ReactDOM.render(<App />, document.getElementById('root'));