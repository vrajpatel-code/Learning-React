import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    );
}

export default Layout;