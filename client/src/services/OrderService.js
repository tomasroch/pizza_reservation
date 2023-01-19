import axios from "axios";
import { BASE_URL, parseJwt } from "./HttpCommon";

class OrderDataService {

    readAllUserOrders(customerId) {
        return axios.get(BASE_URL + 'order/list/customerId/' + customerId, {
            headers: {
                Authorization: parseJwt()
            }
        });
    }

    readOrder(id) {
        return axios.get(BASE_URL + 'order/' + id, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

    createOrder(data) {
        return axios.post(BASE_URL + 'order/create', data)
    }

}

export default new OrderDataService()