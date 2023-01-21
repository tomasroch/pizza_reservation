import axios from "axios"
import { BASE_URL, parseJwt } from "./HttpCommon"

class IngredientDataService {

    readAllIngredients() {
        return axios.get(BASE_URL + 'ingredient/list')
    }

    updateIngredient(id, data) {
        return axios.put(BASE_URL + 'ingredient/' + id, data, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

    deleteIngredient(id) {
        return axios.delete(BASE_URL + 'ingredient/' + id, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

    createIngredient(data) {
        return axios.post(BASE_URL + 'ingredient/create', data, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

}

export default new IngredientDataService()