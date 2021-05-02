import React, { Component } from 'react';
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Modal, Button, InputGroup, FormControl, Row, Dropdown, Image } from 'react-bootstrap'
import firebase from '../../config/firebse';
import { connect } from 'react-redux';
import { facebookLogin } from '../../Store/action/index';
import { googleLogin } from '../../Store/action/index'

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
                            {this.state.authUser ?
                                <div>
                                    <Row>
                                        <Dropdown className='logUserdropdown'>
                                            <Dropdown.Toggle className='dropdownToggle' id="dropdown-basic">
                                                <Image src={authUser.profile} roundedCircle className='logUserImg' />
                                                {authUser.name}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => this.signOut()}>Log Out</Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link className='dropdownList' to='/profile'>
                                                        My Profile
                                                        </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link className='dropdownList' to='/edit-profile'>
                                                        Edit Profile
                                                        </Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Row>
                                </div>
                                :
                                <ReactBootstrap.Nav.Link className='navLinks' onClick={() => this.logInModal()}>Login</ReactBootstrap.Nav.Link>
                            }
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
                <div className='modal-dialog modal-dialog-centered'>
                    <Modal show={this.state.show} onHide={() => this.logInModal()}>
                        <Modal.Body className='modalBody'>
                            <div align='center'>

                                <h3 className='modalHeading'>WELCOME BACK</h3>
                                <h6 className='or'><span className="line-center">Continue with</span></h6>

                                <Button onClick={() => this.props.googleLogin()} variant="danger" className='modBtns'>
                                    <i className="fa fa-google modIcons" aria-hidden="true"></i> Google
                                </Button>
                                <Button onClick={() => this.props.facebookLogin()} className='modBtns'>
                                    <i className="fa fa-facebook modIcons" aria-hidden="true"></i> Facebook
                                </Button>
                                <Button variant="dark" className='modBtns'>
                                    <i className="fa fa-github modIcons" aria-hidden="true"></i> Github
                                </Button>

                                <h6 className='or'><span className="line-center">OR</span></h6>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder='Email' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder='Password' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <Button variant="primary" className='logInBtn' block>Log In</Button>

                                <p>Don't have an account?
                                    <Button variant="light" className='toSignupBtn' onClick={() => this.signUpModal()}> &nbsp; Sign Up</Button>
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal show={this.state.show2} onHide={() => this.signUpModal()}>
                        <Modal.Body className='modalBody'>
                            <div align='center'>

                                <h3 className='modalHeading'>WELCOME To WLUDIO BLOG</h3>
                                <h6 className='or'><span className="line-center">Continue with</span></h6>

                                <Button onClick={() => this.props.googleLogin()} variant="danger" className='modBtns'>
                                    <i className="fa fa-google modIcons" aria-hidden="true"></i> Google
                                </Button>
                                <Button onClick={() => this.props.facebookLogin()} className='modBtns'>
                                    <i className="fa fa-facebook modIcons" aria-hidden="true"></i> Facebook
                                </Button>
                                <Button variant="dark" className='modBtns'>
                                    <i className="fa fa-github modIcons" aria-hidden="true"></i> Github
                                </Button>

                                <h6 className='or'><span className="line-center">OR</span></h6>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder='Full Name' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder='Email' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder='Password' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                <Button variant="primary" className='logInBtn' block>Create Account</Button>

                                <p>Already have an account?
                                    <Button variant="light" className='toSignupBtn' onClick={() => this.logInModal()}> &nbsp; Log In</Button>
                                </p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    facebookLogin: () => dispatch(facebookLogin()),
    googleLogin: () => dispatch(googleLogin())
})

export default connect(null, mapDispatchToProps)(Navbar);