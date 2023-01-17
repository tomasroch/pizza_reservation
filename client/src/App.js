import React from 'react';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from 'react-router'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import { AppContextProvider } from './context/AppContext';
import OrderDetail from './components/order/OrderDetail';


const appTheme = createTheme({
  palette: {
    primary: {
      main: '#9c1626',
      secondary: red[100]
    },
    neutral: {
      main: grey[900]
    },
    gray: {
      main: grey[400]
    },
    lightGray: {
      main: grey[100]
    },
    darkBlue: {
      main: '#102738'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="order/:id" element={<OrderDetail />} />
        </Routes>
        <Footer />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
