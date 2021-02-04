import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class service {
    
    get_productos_service() {
        const url = `${API_URL}/api/producto/`;
        return axios.get(url);
    }
}