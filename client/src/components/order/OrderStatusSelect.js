import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { ORDERS_STATUS } from "../../services/CommonUtils";

function OrderStatusSelect(props) {

    return (
        <FormControl size={props.size} fullWidth={props.fullWidth} sx={{ width: props.width, ml: props.ml }}>
            <InputLabel>Status</InputLabel>
            <Select
                label='Status'
                value={props.filter}
                onChange={props.handleChange}
            >
                {ORDERS_STATUS.map((stat, i) => (
                    <MenuItem key={i} value={stat}>{stat}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default OrderStatusSelect