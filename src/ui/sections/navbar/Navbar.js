import React from 'react';
import './navbar.scss';
import Logo from '../../widget/logo/Logo';
import Navegation from '../../widget/navegation/Navegation';
import Menu from '../../widget/menu/Menu';

const Navbar = () => {

    return(

        <nav className="navbar">

            <Logo/>

            <Navegation/>

            <Menu/>

        </nav>
    )
}

export default Navbar;