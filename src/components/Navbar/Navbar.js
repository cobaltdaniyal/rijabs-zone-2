import React, { Component } from 'react';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import firebase from '../../config/firebase';

class Navbar extends Component {
    state = {
        show: false,
        authUser: {},
        show2: false,
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                authUser: user,
            })
            if (user) {

                firebase.database().ref('users').on('value', (data) => {
                    for (var key in data.val()) {
                        if (user.email === data.val()[key].email) {
                            this.setState({
                                authUser: data.val()[key],
                                show2: false,
                                show: false,
                            })
                        } else {
                            this.setState({ signout: true })
                        }
                    }
                })
            }
        })

    }
    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.setState({ show: false })
            Swal.fire({
                icon: 'warning',
                title: 'User Signed Out Successfully!',
                showConfirmButton: false,
                timer: 1000
            })
        }).catch(function (error) {
            alert(error.message)
        });
    }
    logInModal() {
        this.setState({ show2: false })
        this.setState({ show: !this.state.show })
    }
    signUpModal() {
        this.setState({ show: false })
        this.setState({ show2: !this.state.show2 })
    }

    render() {
        let { authUser } = this.state
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