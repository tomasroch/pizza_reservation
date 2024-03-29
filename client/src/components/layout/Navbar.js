import React, { useContext, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_ROLE, CUSTOMER_ROLE, EMPLOYEE_ROLE } from '../../services/CommonUtils';

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
    const navigate = useNavigate();
    const { cartItemsCount, currentUser, logoutUser } = useContext(AppContext)

    const doLogoutUser = (e) => {
        e.preventDefault()
        logoutUser()
        navigate("/")
    }

    const getUserAvatar = () => {
        return currentUser.customer.firstName.charAt(1).toUpperCase() + currentUser.customer.lastName.charAt(1).toUpperCase()
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
                            display: { sm: 'none', xl: 'block' }
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

                        {(currentUser && EMPLOYEE_ROLE.includes(currentUser.role)) &&
                            <NavButton text='Orders' linkTo='/orders' />}

                        {(currentUser && ADMIN_ROLE.includes(currentUser.role)) &&
                            <NavButton text='Pizzas' linkTo='/pizzas' />}
                        {(currentUser && ADMIN_ROLE.includes(currentUser.role)) &&
                            <NavButton text='Ingredients' linkTo='/ingredients' />}

                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <NavButton text={cartItemsCount} linkTo='/cart' icon={<ShoppingCartIcon />} />

                        {currentUser ? (
                            <div>
                                {CUSTOMER_ROLE.includes(currentUser.role) &&
                                    <Link to='my-account'>
                                        <IconButton sx={{ mx: 1 }}>
                                            <Avatar>{getUserAvatar()}</Avatar>
                                        </IconButton>
                                    </Link>
                                }
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
                                <NavButton text='Sign Up' linkTo='/register' icon={<HowToRegIcon />} />
                            </div>
                        )}

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;