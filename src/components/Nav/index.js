import React from 'react'
import {Link} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Kelly Smith</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Link to="/">Home</Link>
                                    <Link to="/portfolio">Portfolio</Link>
                                    <Link to="/contact">Contact</Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;
