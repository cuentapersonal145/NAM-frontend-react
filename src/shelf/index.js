import { React, useEffect, useState } from 'react'
import List from '../globalComponents/List'
import service from '../services'

import swal from 'sweetalert2'

const objService = new service();

const ShelfView = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        objService.get_productos_service().then((result) => {
            setProductos(result.data);
        }).catch(() => {
            swal.fire(
                'Ups ¡Error!',
                'Fue al obtener los productos. Deberias intentar mas tarde o consultarlo con el administrador',
                'error'
            );
        });
    }, []);

    return (
        <div>
            {console.log(productos)}
            { productos.length > 0 ?  
                <List context={"/productos"} list={productos}/> :
                null
            }
        </div>
    )
}

export default ShelfView
