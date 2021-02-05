import React from 'react'
import './ListProducts.css'

const ListProducts = (props) => {

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <div key={element.id} className="card-list-product">
                        <h3 className="tipo-product"> {element.tipo.nombre} </h3>
                        <p className="text-data-product"> ${element.precio} </p>
                        { 
                            element.tipo.id === 2 || element.tipo.id === 5 ?
                            <p className="text-data-product"> {element.peso} </p> : null
                        }
                    </div>
                )
            )}
        </div>
    )
}

export default ListProducts
