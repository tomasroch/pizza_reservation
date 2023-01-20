import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Divider, List, Typography } from "@mui/material";
import ListItemDrop from "../components/common/ListItemDrop";
import BorderBox from "../components/common/BorderBox";
import { Stack } from "@mui/system";
import IngredientDataService from "../services/IngredientService";
import IngredientForm from "../components/ingredient/IngredientForm";

function Ingredients() {
    const [ingredients, setIngredients] = useState([])

    const readIngredients = () => {
        IngredientDataService.readAllIngredients()
            .then((response) => {
                setIngredients(response.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        readIngredients()
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
                        List of all ingredients
                    </Typography>
                    <List>
                        {ingredients.map((ing, i) => (
                            <ListItemDrop key={ing.id} title={ing.name} active={ing.active} >
                                <Divider />
                                <IngredientForm {...ing} updateList={readIngredients} />
                            </ListItemDrop>
                        ))}
                        <ListItemDrop title='+ Add' highlight>
                            <Divider />
                            <IngredientForm name='' updateList={readIngredients} />
                        </ListItemDrop>
                    </List>
                </BorderBox>
            </Stack>
        </Layout>
    )
}

export default Ingredients