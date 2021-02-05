import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class service {
    
    get_productos_service() {
        const url = `${API_URL}/api/producto/`;
        return axios.get(url);
    }

    get_prod_data_service(id) {
        const url = `${API_URL}/api/datos/producto/` + id + `/`;
        return axios.get(url);
    }
}