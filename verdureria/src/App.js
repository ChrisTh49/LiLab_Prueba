import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Frutas from "./components/Frutas";
import Verduras from "./components/Verduras";
import Cart from "./components/Cart";

import Axios from "axios";

function App() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const postFrutas = () => {
    Axios.post("http://localhost:4200/api/insert_frutas", {
      nombre,
      descripcion,
      cantidad,
      precio,
    });
  };

  const postVerdura = () => {
    Axios.post("http://localhost:4200/api/insert_verduras", {
      nombre,
      descripcion,
      cantidad,
      precio,
    });
  };

  return (
    <div className="App">
      <nav className="navigation">
        <ul>
          <li>
            <a href="/frutas"> Frutas </a>
          </li>

          <li>
            <a href="/verduras"> Verduras </a>
          </li>

          <li>
            <a href="/cart"> Carro </a>
          </li>
        </ul>
      </nav>

      <div>
        <h1>Verdureria</h1>

        <form className="form-control" onSubmit={handleSubmit}>
          <label>Frutas</label>
          <input
            type="text"
            placeholder="nombre de la fruta"
            name="nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="descripcion"
            name="descripcion"
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="cantidad"
            name="cantidad"
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="precio"
            name="precio"
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          />

          <button className="btn" onClick={postFrutas}>Publicar Fruta</button>
        </form>

        <form className="form-control" onSubmit={handleSubmit}>
          <label>Verduras</label>
          <input
            type="text"
            placeholder="nombre de la verdura"
            name="nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="descripcion"
            name="descripcion"
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="cantidad"
            name="cantidad"
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="precio"
            name="precio"
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          />

          <button className="btn" onClick={postVerdura}>Publicar Verdura</button>
        </form>

        <div>
          <BrowserRouter>
            <Route exact path="/frutas" component={Frutas} />

            <Route exact path="/verduras" component={Verduras} />

            <Route exact path="/cart" component={Cart} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
