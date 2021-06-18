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

import { UserContext } from "../context/UserContext"


const Header = () => {

    const context = useContext(UserContext);

    // to make the functionality of navbar toggle button
    const [isFullscreen, setIsFullscreen] = useState(false)

    const toggle = () => {
        setIsFullscreen(!isFullscreen)
    }

    return (
        <Navbar color="dark" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white p-2">
                    SJ GitTrack Application
                </Link>
            </NavbarBrand>

            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user?.email : ""
                }
            </NavbarText>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isFullscreen} navbar>
                <Nav style={{ marginLeft: "auto" }} navbar>
                    {context.user ? (
                        <NavItem>
                            <NavLink tag={Link} onClick={() => context.setUser(null)} className="text-white">
                                Log Out
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className="text-white">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink tag={Link} to="/signin" className="text-white">
                                    Sign In
                                </NavLink>
                            </NavItem>
                        </>
                    )}


                </Nav>
            </Collapse>
        </Navbar >
    );
}

export default Header;