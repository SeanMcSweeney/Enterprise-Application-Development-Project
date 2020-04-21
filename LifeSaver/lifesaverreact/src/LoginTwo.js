import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stored/UserStore';
import ParticleMaker from './ParticleMaker';
import ParticleMaker2 from './ParticleMaker2';
import LoginForm from './LoginForm';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function Modalfunct(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="danger" width="10%" onClick={handleShow}>
        Launch modal
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LoginForm/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
        </Modal>
    </>
    );        
}

class LoginTwo extends React.Component{
    render() {
        return (
        <Modalfunct />
        );
    }
}

export default LoginTwo;
