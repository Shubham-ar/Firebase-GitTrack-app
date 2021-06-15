import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom';

import UserContext from "../context/UserContext"


const Header = () => {
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white p-2">
                    SJ GitTrack Application
                </Link>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav style={{ marginLeft: "auto" }} navbar>
                    <NavItem>
                        <NavLink className="text-white">
                            Sign Up
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink className="text-white">
                            Sign In
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-white">
                            Log Out
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar >
    );
}

export default Header;