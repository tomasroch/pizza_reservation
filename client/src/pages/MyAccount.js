import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "../components/common/TabPanel";
import UserInfo from "../components/user/UserInfo";
import UserOrders from "../components/user/UserOrders";

function MyAccount() {
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <Layout>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    centered
                    sx={{
                        width: '100%',
                        maxWidth: 'md'
                    }}
                >
                    <Tab label="My account" />
                    <Tab label="Orders" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <UserInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserOrders />
            </TabPanel>
        </Layout>
    )

}


export default MyAccount;