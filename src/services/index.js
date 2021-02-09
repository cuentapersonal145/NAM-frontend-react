import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class service {
    
    get_marcas_service() {
        const url = `${API_URL}/api/marca/`;
        return axios.get(url);
    }

    get_prod_marca_service(id) {
        const url = `${API_URL}/api/productos/marca/` + id + `/`;
        return axios.get(url);
    }
}