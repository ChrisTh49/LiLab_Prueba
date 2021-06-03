import React, {useState, useEffect} from 'react';

import Axios from "axios";

function Verduras(){

    const [verdurasList, setVerdurasList] = useState([]);
  
    useEffect(() => {
        Axios.get('http://localhost:4200/verduras').then((response) => {
            setVerdurasList(response.data)
        });
    }, []);

    return(
        <div>
            <h1>
                Verduras
            </h1>
  
            {verdurasList.map((val) => {
                return <div>
                    <h2>Nombre: { val.verduras }</h2>
                    <p>Descripcion: { val.descripcion }</p>
                    <p>Cantidad: { val.cantidad }</p>
                    <p>Precio: { val.precio }</p>

                    <button>
                        Add to cart
                    </button>
                </div>
            })}
        </div>
    )
}

export default Verduras;