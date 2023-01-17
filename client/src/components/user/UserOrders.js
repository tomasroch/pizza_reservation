import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import OrdersTable from "../order/OrdersTable";
import OrderService from "../../services/OrderService";

function UserOrders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        setOrders(OrderService.readAllUserOrders())
    }, [])

    const filterOrders = (statuses) => {
        return orders.filter(o => statuses.includes(o.status))
    }

    const inProgressOrders = () => {
        return filterOrders(['NEW', 'PROCESSING', 'SENT'])
    }

    const processedOrders = () => {
        return filterOrders(['DELIVERED', 'CANCELLED'])
    }

    return (
        <Stack
            spacing={2}
        >
            {/*inProgressOrders.length > 0 && <OrdersTable title="In progress orders" orders={inProgressOrders()} />*/}
            <OrdersTable title="Already processed orders" orders={processedOrders()} />
        </Stack>
    )
}

export default UserOrders;