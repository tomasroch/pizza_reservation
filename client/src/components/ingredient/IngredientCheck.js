import { Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function IngredientCheck(props) {
    const [checked, setChecked] = useState(props.checked)
    const { name } = props.ingredient

    const handleCheck = (e) => {
        e.preventDefault()
        setChecked(!checked)
        props.handleCheckboxChange(props.ingredient)
    }

    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center' }}
        >
            <Switch checked={checked} onChange={handleCheck} />
            <Typography>{name}</Typography>
        </Box>
    )
}

export default IngredientCheck