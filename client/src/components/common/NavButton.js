import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavButton(props) {

    return (
        <Button
            sx={{
                my: 2,
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: props.icon != null ? 'primary.main' : 'darkBlue.main',
                m: 1,
                ':hover': {
                    backgroundColor: 'primary.secondary',
                    Link: {
                        color: 'black'
                    }
                }
            }}
            component={Link}
            to={props.linkTo}
            startIcon={props.icon}
        >
            {props.text}
        </Button>
    )
}

export default NavButton;