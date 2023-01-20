import axios from "axios"
import { BASE_URL } from "./HttpCommon"

class IngredientDataService {

    readAllIngredients() {
        return axios.get(BASE_URL + 'ingredient/list')
    }

    updateIngredient(id, data) {
        return axios.put(BASE_URL + 'ingredient/' + id, data)
    }

    deleteIngredient(id) {
        return axios.delete(BASE_URL + 'ingredient/' + id)
    }

    createIngredient(data) {
        return axios.post(BASE_URL + 'ingredient/create', data)
    }

}

export default new IngredientDataService()