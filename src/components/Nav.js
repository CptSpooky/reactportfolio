import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function Nav() {
    return (
        <Router>
            <>
                <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Route path="/" exact component={Portfolio} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
            </>
        </Router>
    );
}

