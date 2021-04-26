import React, { Component } from 'react';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className='navbarMain'>
                <ReactBootstrap.Navbar fixed="top" collapseOnSelect expand="lg" className='Nav' variant="light">
                    <Link to='/'>
                        <ReactBootstrap.Image src={logo} className='navLogo' />
                    </Link>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="mr-auto">
                           
                        </ReactBootstrap.Nav>
                        <ReactBootstrap.Nav>
                        <Link className='navLinks' to='/' >Home</Link>
                            <Link className='navLinks' to='/shop' >Shop</Link>
                            <Link className='navLinks' to='/contact' >Contact</Link>
                            <Link className='navLinks' to='/contact' >Login</Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
            </div>
        )
    }
}
export default Navbar;