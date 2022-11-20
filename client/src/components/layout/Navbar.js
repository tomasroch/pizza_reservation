import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavButton from '../NavButton';
import { CartContext } from '../../CartContext';

const menuItems = [
    {
        title: 'Menu',
        route: '/menu',
    },
    {
        title: 'About us',
        route: '/about-us',
    },
    {
        title: 'Contact',
        route: '/contact',
    }
]

function Navbar() {
    const { cartItems } = useContext(CartContext)

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LocalPizzaIcon fontSize='large' />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            ml: 1
                        }}
                    >
                        Pizza.cz
                    </Typography>


                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            ml: 3,
                        }}
                    >
                        {menuItems.map((menuItem) => (
                            <NavButton key={menuItem.title} text={menuItem.title} linkTo={menuItem.route} />
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <NavButton text={cartItems.length} linkTo='/cart' icon={<ShoppingCartIcon />} />
                        <NavButton text='Login' linkTo='/login' icon={<LoginIcon />} />
                        <NavButton text='Register' linkTo='/register' icon={<HowToRegIcon />} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;