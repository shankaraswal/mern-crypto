import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
            <h1 className="navbar-brand">React Interface</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="nav justify-content-end">
                <li className="nav-item active">
                    <NavLink to="/" className="nav-link text-white">Home</NavLink>
                </li>
                 <li className="nav-item active">
                    <NavLink to="/crypto" className="nav-link text-white">Crypto List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link text-white">About</NavLink>
                </li>
            </ul>
            </div></div>
        </nav>
    );
  }
}

export default Nav;
