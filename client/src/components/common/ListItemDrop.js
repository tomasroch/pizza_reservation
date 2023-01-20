import { Collapse, Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { grey } from "@mui/material/colors";

function ListItemDrop(props) {
    const [open, setOpen] = useState(false)

    const highlightItem = () => {
        return open || props.highlight
    }

    return (
        <div>
            <ListItemButton onClick={() => setOpen(!open)}
                sx={{
                    bgcolor: highlightItem() ? 'primary.main' : 'white',
                    ':hover': {
                        bgcolor: highlightItem() ? 'primary.main' : grey[100],
                    },
                    color: highlightItem() ? 'white' : 'black'
                }}
            >
                <ListItemIcon>
                    {props.active ? <CircleIcon /> : <PanoramaFishEyeIcon />}
                </ListItemIcon>
                <ListItemText
                    primary={props.title} secondary={props.desc} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open}>
                {props.children}
            </Collapse>
            <Divider />
        </div>
    )
}

export default ListItemDrop;