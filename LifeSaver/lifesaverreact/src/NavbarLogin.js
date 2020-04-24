import React, { useState } from 'react';
import UserStore from './stored/UserStore';
import PageStore from './stored/PageStore';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import SubmitButton from './SubmitButton';

function Modalfunct(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="secondary" width="10%" onClick={handleShow}>
        More Info
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title >More LifeSaverVR Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        LifeSaverVR was Created by Sean McSweeney as a final year project. In the future he hopes to keep developing on the website and the virtual reality application. 
        This website will give information such as the build version and future updates.
        <br></br>
        <br></br>
        <Button variant="outline-dark" href="https://github.com/SeanMcSweeney/LifeSaverVR-" block >GitHub</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>
    </>
    );        
}

class NavbarLogin extends React.Component{
    async doLogout(){

        try {
    
        let res = await fetch('/logout', {
            method: 'post',
            headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            }
        });
    
        let result = await res.json();
    
        if (result && result.success){
            UserStore.isLoggedIn = false;
            UserStore.username = '';
            window.location.reload();
        }
        }
    
        catch(e){
            console.log(e)
        }
    }

    ToHome() {
        if (!PageStore.home){
            PageStore.home = true;
            PageStore.information = false;
            PageStore.login = false;
            PageStore.register = false;
            PageStore.admin = false;
            PageStore.profile = false;
        }
    }

    ToInfo() {
        if (!PageStore.information){
            PageStore.home = false;
            PageStore.information = true;
            PageStore.login = false;
            PageStore.register = false;
            PageStore.admin = false;
            PageStore.profile = false;
        }
    }

    ToLogin() {
        if (!PageStore.login){
            PageStore.home = false;
            PageStore.information = false;
            PageStore.login = true;
            PageStore.register = false;
            PageStore.admin = false;
            PageStore.profile = false;
        }
    }

    ToRegister() {
        if (!PageStore.register){
            PageStore.home = false;
            PageStore.information = false;
            PageStore.login = false;
            PageStore.register = true;
            PageStore.admin = false;
            PageStore.profile = false;
        }
    }

    ToAdmin() {
        if (!PageStore.admin){
            PageStore.home = false;
            PageStore.information = false;
            PageStore.login = false;
            PageStore.register = false;
            PageStore.admin = true;
            PageStore.profile = false;
        }
    }

    ToProfile() {
        if (!PageStore.profile){
            PageStore.home = false;
            PageStore.information = false;
            PageStore.login = false;
            PageStore.register = false;
            PageStore.admin = false;
            PageStore.profile = true;
        }
    }

    render() {
        if (UserStore.isLoggedIn) {
            if (UserStore.admin) {
            return (
                <Navbar sticky="top" bg="light" expand="lg">
                    <Navbar.Brand href="#home">LifeSaverVR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link onClick={ () => this.ToHome() } href="#home">HOME</Nav.Link>
                        <Nav.Link onClick={ () => this.ToInfo() } href="#info">INFORMATION</Nav.Link>
                        <Nav.Link onClick={ () => this.ToProfile() } href="#profile">{UserStore.username}'s Profile</Nav.Link>
                        <Nav.Link onClick={ () => this.ToAdmin() } href="#admin">Admin</Nav.Link>
                        </Nav>
                        <Modalfunct />
                        <SubmitButton
                        text={'Log Out'}
                        disabled={false}
                        onClick={ () => this.doLogout() }
                        />    
                    </Navbar.Collapse>
                </Navbar>
                );
            }
            else{
                return (
                    <Navbar sticky="top" bg="light" expand="lg">
                        <Navbar.Brand href="#home">LifeSaverVR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link onClick={ () => this.ToHome() } href="#home">HOME</Nav.Link>
                            <Nav.Link onClick={ () => this.ToInfo() } href="#info">INFORMATION</Nav.Link>
                            <Nav.Link onClick={ () => this.ToProfile() } href="#profile">{UserStore.username}'s Profile</Nav.Link>
                            </Nav>
                            <Modalfunct />
                            <SubmitButton
                            text={'Log Out'}
                            disabled={false}
                            onClick={ () => this.doLogout() }
                            />   
                        </Navbar.Collapse>
                    </Navbar>
                    );
            }
            }
            else {
                return (
                    <Navbar sticky="top" bg="light" expand="lg">
                        <Navbar.Brand href="#home">LifeSaverVR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link onClick={ () => this.ToHome() } href="#home">HOME</Nav.Link>
                            <Nav.Link onClick={ () => this.ToInfo() } href="#info">INFORMATION</Nav.Link>
                            </Nav>
                            <SubmitButton
                            text={'Log In'}
                            disabled={false}
                            onClick={ () => this.ToLogin() }
                            /> 
                            <SubmitButton
                            text={'Register'}
                            disabled={false}
                            onClick={ () => this.ToRegister() }
                            /> 
                            <Modalfunct />
                        </Navbar.Collapse>
                    </Navbar>
                    );
            }
        }
    }

export default NavbarLogin;
