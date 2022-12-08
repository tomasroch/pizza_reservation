import axios from "axios";
import { BASE_URL } from "./HttpCommon";

class PizzaDataService {

    getAll() {
        return axios.get(BASE_URL + 'pizza/list', {})
    }

    getAllActive() {
        return axios.get(BASE_URL + 'pizza/list/active/true', {})
    }

    create(data) {
        return axios.post(BASE_URL + 'pizza/create', data)
    }

    update(id, data) {

    }

    delete(id) {

    }
}

export default new PizzaDataService()