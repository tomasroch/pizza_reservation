import React, { useContext, useState } from "react";
import BorderBox from "../common/BorderBox";
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { Grid, IconButton, Switch, TextField, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import IngredientDataService from "../../services/IngredientService";
import { AppContext } from "../../context/AppContext";

function IngredientForm(props) {
    const { showSnackbar } = useContext(AppContext)
    const [name, setName] = useState(props.name)
    const [active, setActive] = useState(props.active ? props.active : false)

    const handleDeleteIngredient = (e) => {
        e.preventDefault()
        IngredientDataService.deleteIngredient(props.id)
            .then((res) => {
                showSnackbar(props.name + ' ingredient deleted', 'success')
                props.updateList()
            })
            .catch((err) => {
                showSnackbar('Failed to delete ' + props.name + ' ingredient ', 'warning')
            })
    }

    const handleSaveIngredient = (e) => {
        e.preventDefault()

        if (!name) {
            showSnackbar('Ingredient name must be filled', 'warning')
            return
        }

        const data = { name: name, active: active }
        if (props.name) {
            IngredientDataService.updateIngredient(props.id, data)
                .then((res) => {
                    showSnackbar(name + ' ingredient saved', 'success')
                    props.updateList()
                })
                .catch((err) => {
                    showSnackbar('Failed to save ' + props.name + ' ingredient ', 'warning')
                })
        } else {
            IngredientDataService.createIngredient(data)
                .then((res) => {
                    showSnackbar(name + ' ingredient created', 'success')
                    setName('')
                    setActive(false)
                    props.updateList()
                })
                .catch((err) => {
                    showSnackbar('Failed to create ' + name + ' ingredient ', 'warning')
                })
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setName(props.name)
        setActive(props.active)
    }


    return (
        <BorderBox m={1} padding={0.5}>
            <Grid
                container
                direction='row'
                m={2}
                alignItems='center'
                justifyContent='center'
                rowSpacing={1}
            >
                <Grid item md={6}>
                    <TextField
                        value={name}
                        size="small"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item md={6}>
                    <Stack
                        direction='row'
                    >
                        <Tooltip title="Active">
                            <Switch checked={active} onChange={() => setActive(!active)} />
                        </Tooltip>

                        <Tooltip title="Save">
                            <IconButton onClick={handleSaveIngredient}>
                                <DoneIcon />
                            </IconButton>
                        </Tooltip>


                        <Tooltip title="Cancel">
                            <span>
                                <IconButton onClick={handleCancel} disabled={!props.name}>
                                    <ClearIcon />
                                </IconButton>
                            </span>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <span>
                                <IconButton onClick={handleDeleteIngredient} disabled={!props.name}>
                                    <DeleteIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Stack>
                </Grid>
            </Grid>
        </BorderBox>
    )
}

export default IngredientForm