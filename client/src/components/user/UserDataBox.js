import React from "react";
import BorderBox from "../common/BorderBox";
import { Grid, Typography } from "@mui/material";

function UserDataBox(props) {
    const { user } = props

    return (
        <BorderBox padding={1}>
            <Grid
                container
                direction='row'
                m={2}
                alignItems='center'
            >
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        First name:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {user.firstName}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Last name:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {user.lastName}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Email:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        {user.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        Phone:
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="subtitle1" color="text.secondary">
                        +420 {user.phone}
                    </Typography>
                </Grid>
            </Grid>
        </BorderBox>
    )
}

export default UserDataBox