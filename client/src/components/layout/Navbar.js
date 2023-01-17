import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import NavButton from '../common/NavButton';
import { AppContext } from '../../context/AppContext';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

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
    const { cartItemsCount, logoutUser } = useContext(AppContext)
    const [isUserLogin, setIsUserLogin] = useState(false)

    const doLogoutUser = (e) => {
        e.preventDefault()
        logoutUser()
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LocalPizzaIcon fontSize='large' />
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
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
                        <NavButton text={cartItemsCount} linkTo='/cart' icon={<ShoppingCartIcon />} />

                        {isUserLogin ? (
                            <div>
                                <Link to='my-account'>
                                    <IconButton sx={{ mx: 1 }}>
                                        <Avatar>AB</Avatar>
                                    </IconButton>
                                </Link>
                                <IconButton
                                    onClick={(e) => doLogoutUser(e)}
                                    sx={{
                                        my: 1,
                                        color: 'white',
                                        ':hover': {
                                            backgroundColor: 'primary.secondary'
                                        }
                                    }}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <div>
                                <NavButton text='Login' linkTo='/login' icon={<LoginIcon />} />
                                <NavButton text='Sing Up' linkTo='/register' icon={<HowToRegIcon />} />
                            </div>
                        )}

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;