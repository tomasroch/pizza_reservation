import axios from "axios";
import { BASE_URL } from "./HttpCommon";

class UserDataService {

    login(username, password) {

    }

    register(data) {
        return axios.post(BASE_URL + 'user/register', data);
    }

    readAllAddresses() {
        return [{ postalCode: '12345', city: 'Pardubice', street: 'Nehusovaddddddddddd dddddddddddddddd dddddddddd dddddddddddddddddd ddddddddddddd 1939/15' }, { postalCode: '78397', city: 'Olomouc', street: 'Nova 654544' }]
    }
}

export default new UserDataService()