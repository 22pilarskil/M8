import React, { useState } from 'react';
import './navbar.css';
import { RIMenu3Line, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/m8_logo.PNG'



const Menu = () => (
    <>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#home">Home</a></p>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#ym8">YM8</a></p>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#how_to_use">How To Use M8</a></p>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#partnerships">Partnerships</a></p>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#about">About Us</a></p>
        <p> <a style={{ textDecoration: 'none', color: 'black' }} href="#contact">Contact Us</a></p>
    </>
    )

// BEM --> Block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="m8__navbar">
            <div className="m8__navbar-links">
                <div className="m8__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="m8__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="m8__navbar-sign">
                <p style={{ color: 'black' }}>Sign in</p>
                <button type="button" borderColor='white' outline='1'>Sign up</button>
            </div>
            <div className="m8__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="000" size={45} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="000" size={45} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="m8__navbar-menu_container scale-in-tr">
                        <div className="m8__navbar-menu_container-links">
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#home">Home</a></p>
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#ym8">YM8</a></p>
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#how_to_use">How To Use M8</a></p>
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#partnerships">Partnerships</a></p>
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#about">About Us</a></p>
                            <p> <a style={{ textDecoration: 'none', color: 'white', fontSize: '19px' }} href="#contact">Contact Us</a></p>
                            <div className="m8__navbar-menu_container-links-sign">
                                <p style={{ color: 'white', fontSize: '19px'}}>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Navbar