import axios from "axios";
import { BASE_URL } from "./HttpCommon";

class OrderDataService {


    // TODO
    readAllUserOrders() {
        return [{ id: 12, price: 150.2, status: 'CANCELLED', created: '12.12.2020', updated: '12.12.2022', estimatedDelivery: '25.25.20211' },
        { id: 13, price: 150.2, status: 'CANCELLED', created: '12.12.2020', updated: '12.12.2022', estimatedDelivery: '25.25.20211' }]
    }

    readOrder(id) {
        return {
            id: 12, price: 150.2, status: 'CANCELLED', created: '12.12.2020',
            updated: '12.12.2022', estimatedDelivery: '25.25.20211',
            customer: { username: 'karel69', firstName: 'Rostislav', lastName: 'Rosak', email: 'akadgsgs@shdsgh.com', phone: '1234567989' },
            address: { postalCode: '78397', city: 'Olomouc', street: 'Nova 654544' }
        };
    }

}

export default new OrderDataService()