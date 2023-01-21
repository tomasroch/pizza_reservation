import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import OrdersTable from "../order/OrdersTable";
import OrderService from "../../services/OrderService";
import { Alert } from "@mui/material";
import { AppContext } from "../../context/AppContext";

function UserOrders() {
    const { currentUser } = useContext(AppContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        OrderService.readAllUserOrders(currentUser.customer.id)
            .then((response) => {
                setOrders(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [currentUser.customer.id])

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
            {orders.length > 0 ?
                <div>
                    {inProgressOrders().length > 0 && <OrdersTable title="In progress orders" orders={inProgressOrders()} />}
                    {processedOrders().length > 0 && <OrdersTable title="Already processed orders" orders={processedOrders()} />}
                </div>
                : <Alert severity="info">No any orders found</Alert>
            }
        </Stack>
    )
}

export default UserOrders;