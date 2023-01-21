import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Stack } from "@mui/material";
import OrdersTable from "../components/order/OrdersTable";
import BorderBox from "../components/common/BorderBox";
import { Box } from "@mui/system";
import { ORDERS_STATUS } from "../services/CommonUtils";
import OrderDataService from "../services/OrderService";
import OrderStatusSelect from "../components/order/OrderStatusSelect";

function Orders() {
    const [orders, setOrders] = useState([])
    const [filter, setFilter] = useState(ORDERS_STATUS.at(0))


    useEffect(() => {
        OrderDataService.readOrdersByStatus(filter)
            .then((response) => {
                setOrders(response.data)
            })
            .catch((e) => { })
    }, [filter])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <Layout>
            <Stack
                alignItems='center'
            >
                <BorderBox>
                    <Stack
                        spacing={1}
                    >
                        <Box
                            maxWidth='xs'
                        >
                            <OrderStatusSelect handleChange={handleChange} filter={filter} fullWidth />
                        </Box>
                        <OrdersTable orders={orders} title="All orders" />
                    </Stack>
                </BorderBox>
            </Stack>
        </Layout>
    )
}

export default Orders