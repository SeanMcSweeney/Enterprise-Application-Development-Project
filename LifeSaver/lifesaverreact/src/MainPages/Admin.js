import React from 'react';
import InputField from '../InputField';
import SubmitButton from '../SubmitButton';
import AllUsers from '../stored/AllUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

/* react bootstrap imports */
import { Jumbotron } from 'react-bootstrap';

class Admin extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            admin: '',
            aboutme: '',
            buttonDisabled: false
        }
    }

    async SearchUser() {

        if (!this.state.username){
            alert("enter a user")
            return;
        }
        try {

            let res = await fetch('/grabuser', {
            method: 'post',
            headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username
            })
        });
    
        let result = await res.json();

        if (result && result.success){
            AllUsers.username = result.username;
            AllUsers.email = result.email;
            AllUsers.admin = result.admin;
            AllUsers.aboutme = result.aboutme;
            this.state.username = AllUsers.username;
            this.state.email = AllUsers.email;
            this.state.admin = AllUsers.admin;
            this.state.aboutme = AllUsers.aboutme;
            alert("user found");
        }
    
        else {
            console.log("error user not found")
        }
    
        }
    
        catch(e){
        console.log("404 error")
        }
    }

    async deleteUser(){
        try {

        if (!AllUsers.username){
            alert("no user selected")
            return;
        }
        else{
            let res = await fetch('/deleteuser', {
            method: 'post',
            headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: AllUsers.username
            })
            });
    
            let result = await res.json();

            if (result && result.success){
                AllUsers.username = '';
                AllUsers.email = '';
                AllUsers.admin = '';
                AllUsers.aboutme = '';
                this.state.username = '';
                this.state.email = '';
                this.state.admin = '';
                this.state.aboutme = '';
                alert("user deleted");
            }
    
            else {
                console.log("error user not found")
            }
        }
    
        }
    
        catch(e){
        console.log("404 error")
        }
    }

    async editUser(){
        try {

        if (!AllUsers.username){
            alert("username empty")
            return;
        }
        else if(!AllUsers.email){
            alert("email empty")
            return;
        }
        else if(!AllUsers.admin){
            alert("admin empty")
            return;
        }
        else if(!AllUsers.aboutme){
            alert("aboutme empty")
            return;
        }
        else{
            let res = await fetch('/edituser', {
            method: 'post',
            headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                admin: this.state.username,
                aboutme: this.state.aboutme,
                email: this.state.email
            })
            });
    
            let result = await res.json();

            if (result && result.success){
                AllUsers.username = result.username;
                AllUsers.email = result.email;
                AllUsers.admin = result.admin;
                AllUsers.aboutme = result.aboutme;
                this.state.username = AllUsers.username;
                this.state.email = AllUsers.email;
                this.state.admin = AllUsers.admin;
                this.state.aboutme = AllUsers.aboutme;
                alert("user changed");
            }
    
            else {
                console.log("error user not found")
            }
        }
    
        }
    
        catch(e){
        console.log("404 error")
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 20) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    render() {
        return (
        <div className="admin">
                <Jumbotron>
                    <h2 className="Title2">Admin Page</h2>
                    <p className="heading">Find User</p>
                    <InputField
                        type='text'
                        placeholder=' Enter username'
                        value={this.state.username ? this.state.username : ''}
                        onChange={ (val) => this.setInputValue('username', val) }
                    />
                    <SubmitButton
                        text='Find User'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.SearchUser() }
                    /> 
                </Jumbotron>
                <br></br>
                <Jumbotron>
                    <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>About</th>
                            <th>Admin</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                        <p>{AllUsers.username}</p>
                        </td>
                        <td>
                        <InputField
                        type='text'
                        placeholder=' User email'
                        value={this.state.email ? this.state.email : ''}
                        onChange={ (val) => this.setInputValue('email', val) }
                        /> 
                        </td>
                        <td>
                        <InputField
                        type='text'
                        placeholder=' User about'
                        value={this.state.aboutme ? this.state.aboutme : ''}
                        onChange={ (val) => this.setInputValue('aboutme', val) }
                        />    
                        </td>
                        <td>
                        <InputField
                        type='text'
                        placeholder=' User admin'
                        value={this.state.admin ? this.state.admin : ''}
                        onChange={ (val) => this.setInputValue('admin', val) }
                        />    
                        </td>
                        <td>
                        <SubmitButton
                        text='Find User'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.editUser() }
                        /> 
                        </td>
                        <td>
                        <SubmitButton
                        text='Find User'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.deleteUser() }
                        /> 
                        </td>
                    </tbody>
                </table>
                </Jumbotron>
                <br></br>
        </div>
        );
    }
}

export default Admin;