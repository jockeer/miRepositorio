import React, { Component } from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";

import { esPar } from "./funciones";
const result = esPar(3);
console.log(result);

class App extends Component {
  mostrarNombre() {
    return <h2>Juan</h2>;
  }
  render() {
    return (
      <div>
        <h3>Funciones Basicas {this.mostrarNombre()}</h3>
        <Button variant="contained" color="primary">
          Es Par
        </Button>
        <h1>!Hola Mundo</h1>
        <h2>Q Macizo</h2>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
