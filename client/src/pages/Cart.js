import { Stack } from "@mui/material";
import React from "react";
import CartItemsTable from "../components/cart/CartItemsTable";
import CustomerForm from "../components/cart/CustomerForm";
import Layout from "../components/layout/Layout";


function Cart() {
    return (
        <Layout>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <CartItemsTable />
                <CustomerForm />
            </Stack>
        </Layout >
    );
}

export default Cart;