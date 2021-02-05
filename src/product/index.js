import { React, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import swal from 'sweetalert2'

import service from '../services';
import ListProducts from './components/ListProducts';

const objService = new service();

const Product = () => {

    let { id } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        objService.get_prod_data_service(id).then((result) => {
            setData(result.data);
        }).catch(() => {
            swal.fire(
                'Ups ¡Error!',
                'Fue al obtener los datos del producto [ID: ' + id + ']. Deberias intentar mas tarde o consultarlo con el administrador',
                'error'
            );
        });
    }, [id]);

    return (
        <div className="container-list">
            { data.length > 0 ? <ListProducts list={data}/> : null } 
        </div>
    )
}

export default Product
