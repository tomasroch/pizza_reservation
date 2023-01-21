import axios from "axios";
import { BASE_URL, parseJwt } from "./HttpCommon";

class PizzaDataService {

    getAll() {
        return axios.get(BASE_URL + 'pizza/list')
    }

    getAllActive() {
        return axios.get(BASE_URL + 'pizza/list/active/true')
    }

    createPizza(data) {
        return axios.post(BASE_URL + 'pizza/create', data, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

    updatePizza(data) {
        return axios.put(BASE_URL + 'pizza/update', data, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }
}

export default new PizzaDataService()