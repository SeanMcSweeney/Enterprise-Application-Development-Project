import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stored/UserStore';

class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            buttonDisabled: false
        }
        this.Submit = this.Submit.bind(this)
    }

    Submit(event) {
        event.preventDefault()
        var data = {
            username: this.state.name,
            password: this.state.password,
            email: this.state.email
        }
        //console.log(data)
        fetch("/Register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            //console.log(data)    
            if(data == "success"){
            this.setState({msg: "Thank you for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <Form onSubmit={this.Submit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.logChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="name" placeholder="Enter Username" onChange={this.logChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.logChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;
