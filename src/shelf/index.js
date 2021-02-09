import { React, useEffect, useState } from 'react'
import List from '../globalComponents/List'
import service from '../services'

import swal from 'sweetalert2'

const objService = new service();

const ShelfView = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        objService.get_marcas_service().then((result) => {
            setProductos(result.data);
        }).catch(() => {
            swal.fire(
                'Ups ¡Error!',
                'Fue al obtener las marcas de los productos. Deberias intentar mas tarde o consultarlo con el administrador',
                'error'
            );
        });
    }, []);

    return (
        <div>
            <div className="container-list">
                { productos.length > 0 ? <List context={"/productos"} list={productos}/> : null } 
            </div>
        </div>
    )
}

export default ShelfView
