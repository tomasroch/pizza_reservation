import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Divider, List, Stack, Typography } from "@mui/material";
import ListItemDrop from "../components/common/ListItemDrop";
import BorderBox from "../components/common/BorderBox";
import PizzaDataService from "../services/PizzaService";
import PizzaForm from "../components/pizza/PizzaForm";
import IngredientDataService from "../services/IngredientService";

function Pizzas() {
    const [pizzas, setPizzas] = useState([])
    const [ingredients, setIngredients] = useState([])

    const readAllPizzas = () => {
        PizzaDataService.getAll()
            .then((response) => {
                setPizzas(response.data)
            })
            .catch((e) => {

            })
    }

    const readAllIngredients = () => {
        IngredientDataService.readAllIngredients()
            .then((response) => {
                setIngredients(response.data)
            })
            .catch((e) => {

            })
    }

    useEffect(() => {
        readAllPizzas()
        readAllIngredients()
    }, [])

    return (
        <Layout>
            <Stack
                alignItems='center'
            >
                <BorderBox width='100%'>
                    <Typography
                        variant="h6"
                        sx={{ mb: 1 }}
                    >
                        List of all pizzas
                    </Typography>
                    <List>
                        {pizzas.map((pizza, i) => (
                            <ListItemDrop key={pizza.id} title={pizza.name} active={pizza.active} desc={pizza.description ? pizza.description : 'No description'}>
                                <Divider />
                                <PizzaForm {...pizza} updateList={readAllPizzas} allIngredient={ingredients} />
                            </ListItemDrop>
                        ))}
                        <ListItemDrop title='+ Add' highlight>
                            <PizzaForm name='' description='' price={0} ingredients={[]} updateList={readAllPizzas} allIngredient={ingredients} />
                        </ListItemDrop>
                    </List>
                </BorderBox>
            </Stack>
        </Layout>
    )
}

export default Pizzas