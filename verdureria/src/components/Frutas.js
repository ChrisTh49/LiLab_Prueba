import React, {useState, useEffect} from 'react';

import Axios from "axios";

function Frutas(){
    
    const [frutasList, setFrutasList] = useState([]);

    const addToCart = () => {
        
    }
  
    useEffect(() => {
        Axios.get('http://localhost:4200/frutas').then((response) => {
            setFrutasList(response.data)
        });
    }, []);
  
    return(
        <div>
            <h1>
                Frutas
            </h1>
  
            {frutasList.map((val) => {
                return <div>
                    <h2>Nombre: { val.frutas }</h2>
                    <p>Descripcion: { val.descripcion }</p>
                    <p>Cantidad: { val.cantidad }</p>
                    <p>Precio: { val.precio }</p>

                    <button onClick={ addToCart }>
                        Añadir al carro
                    </button>
                </div>
            })}
        </div>
    )
  }

export default Frutas;