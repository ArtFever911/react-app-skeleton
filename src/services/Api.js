import axios from 'axios';
import { Route } from 'react-router-dom';

class ApiService {
    constructor() {
        this.route = new Route();
        this.config = {};
        this.http = axios.create(this.config);
        this.#setInterceprots();
    }
    #setInterceprots() {
        this.http.interceptors.response.use(
            res => res,
            err => {
                if (err.response.status === 404) {
                    throw new Error(`${this.config.url} not found`);
                }
                throw err
            }
        )
    }
}

export default ApiService;