import React from 'react'
import './ListProducts.css'

const ListProducts = (props) => {

    const formatearPrecio = (precio) => {
        var precioForm = "$";
        var str = precio + "";
        var array = str.split("");
        
        array = array.reverse();
        
        let index = 3;
        while ( index < array.length) {
            array.splice(index, 0, ".");
            index += 4;
        }
        array = array.reverse();

        for (let index = 0; index < array.length; index++) {
            precioForm += array[index];
        }
        return precioForm;
    }

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <div key={element.id} className="card-list-product">
                        {
                            element.categoria.nombre !== "Ninguna" ?
                            <h3 className="title-product"> {element.categoria.nombre} </h3> : null
                        }
                        <h4 className="subtitle-product"> {element.tipo.nombre} </h4>
                        <p className="text-data-product"> {formatearPrecio(element.precio)} </p>
                        { 
                            element.tipo.nombre === "Bulto" || element.tipo.nombre === "Paquete" ?
                            <p className="text-data-product"> {element.peso} </p> : null
                        }
                    </div>
                )
            )}
        </div>
    )
}

export default ListProducts
