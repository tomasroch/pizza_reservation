import React, { useContext, useState } from "react";
import BorderBox from "../common/BorderBox";
import { Button, FormControl, FormGroup, FormLabel, Grid, InputAdornment, Switch, TextField, Tooltip } from "@mui/material";
import { validNumberField } from "../../services/CommonUtils";
import { Stack } from "@mui/system";
import PizzaDataService from "../../services/PizzaService";
import { AppContext } from "../../context/AppContext";
import IngredientCheck from "../ingredient/IngredientCheck";

function PizzaForm(props) {
    const { showSnackbar } = useContext(AppContext)
    const [name, setName] = useState(props.name)
    const [desc, setDesc] = useState(props.description ? props.description : '')
    const [price, setPrice] = useState(props.price)
    const [active, setActive] = useState(props.active ? props.active : false)
    const [pizzaIngredient, setPizzaIngredient] = useState(props.ingredients ? props.ingredients : [])

    const handleSavePizza = (e) => {
        e.preventDefault()

        if (!name || price < 1) {
            showSnackbar('Invalid pizza attributes', 'warning')
            return
        }

        const data = {
            id: props.id,
            name: name,
            active: active,
            description: desc,
            ingredients: pizzaIngredient,
            price: price
        }
        if (props.name) {
            PizzaDataService.updatePizza(data)
                .then((res) => {
                    showSnackbar(name + ' pizza saved', 'success')
                    props.updateList()
                })
                .catch((err) => {
                    showSnackbar('Failed to save ' + props.name + ' pizza ', 'warning')
                })
        } else {
            PizzaDataService.createPizza(data)
                .then((res) => {
                    showSnackbar(name + ' pizza created', 'success')
                    setName('')
                    setActive(false)
                    setPrice(0)
                    setDesc('')
                    setPizzaIngredient([])
                    props.updateList()
                })
                .catch((err) => {
                    showSnackbar('Failed to create ' + name + ' pizza ', 'warning')
                })
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setName(props.name)
        setActive(props.active)
        setPrice(props.price)
        setPizzaIngredient(props.ingredients)
    }

    const handleCheckboxChange = (ing) => {
        let newIngredients = pizzaIngredient ? [...pizzaIngredient] : []

        if (isChecked(ing.id)) {
            newIngredients = newIngredients.filter(function (item) {
                return item.id !== ing.id
            })
            setPizzaIngredient(newIngredients)
        } else {
            newIngredients.push(ing)
            setPizzaIngredient(newIngredients)
        }
    }

    const isChecked = (id) => {
        return pizzaIngredient.filter(p => p.id === id).length > 0
    }

    return (
        <BorderBox m={1} padding={3}>
            <Grid
                container
                direction="row"
                spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        label="Name"
                        value={name}
                        id="name"
                        required
                        color="neutral"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        label="Price"
                        value={price}
                        id="price"
                        required
                        color="neutral"
                        fullWidth
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Kč</InputAdornment>
                        }}
                        onChange={(e) => validNumberField(e, setPrice)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        size="small"
                        label="Description"
                        value={desc}
                        id="desc"
                        rows={2}
                        color="neutral"
                        fullWidth
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Tooltip title="Active" placement="right">
                        <Switch checked={active} onChange={() => setActive(!active)} />
                    </Tooltip>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel>Pizza ingredients</FormLabel>
                        <FormGroup>
                            <Grid
                                container
                                direction="row"
                                spacing={2}
                                my={1}
                            >
                                {props.allIngredient.map((ing, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <IngredientCheck ingredient={ing} checked={isChecked(ing.id)} handleCheckboxChange={handleCheckboxChange} />
                                    </Grid>
                                ))}
                            </Grid>
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Stack
                        direction='row'
                        justifyContent='center'
                        spacing={1}
                    >
                        <Button
                            variant="contained"
                            size="small"
                            onClick={handleSavePizza}
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </BorderBox>
    )
}

export default PizzaForm;