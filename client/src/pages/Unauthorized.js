import React from "react";
import Layout from "../components/layout/Layout";
import { Alert } from "@mui/material";

function Unauthorized() {
    return (
        <Layout>
            <Alert severity='error'>Unauthorized!</Alert>
        </Layout>
    )
}

export default Unauthorized