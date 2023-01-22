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

    readOrdersByStatus(status) {
        return axios.get(BASE_URL + 'order/list/status/' + status, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

    changeOrderStatus(id, status) {
        return axios.put(BASE_URL + 'order/' + id + '/status/' + status, {}, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }

}

export default new OrderDataService()