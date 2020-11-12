import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function NavBar() {
    return (
        <Router>

            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Danielle Varela</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav><Link to="/reactportfolio" className="nav-item nav-link">Portfolio</Link></Nav>
                    <Nav><Link to="/about" className="nav-item nav-link">About</Link></Nav>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

            <Route path="/reactportfolio" exact component={Portfolio} />
            <Route path="/about" exact component={About} />
            

        </Router>
    );
}

