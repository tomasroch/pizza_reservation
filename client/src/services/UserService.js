import axios from "axios";
import { BASE_URL, parseJwt } from "./HttpCommon";

class UserDataService {

    login(username, password) {
        return axios.post(BASE_URL + 'auth/login', { username: username, password: password })
    }

    register(data) {
        return axios.post(BASE_URL + 'user/register', data);
    }

    readAllCustomerAddresses(customerId) {
        return axios.get(BASE_URL + 'order/addresses/list/customerId/' + customerId, {
            headers: {
                Authorization: parseJwt()
            }
        })
    }
}

export default new UserDataService()