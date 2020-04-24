import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stored/UserStore';
import PageStore from './stored/PageStore';

class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
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

    async doLogin() {

        if (!this.state.username) {
            alert("You must enter a username");
            return;
        }
        else if (!this.state.password) {
            alert("You must enter a password");
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                window.location.reload();
            }

            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }

        catch(e){
            console.log(e);
            this.resetForm();
        }

    }
    render() {

        return (
            <div className="container3">
                <div className="loginform">
                    <p className="logintitle"> Login </p>
                        <InputField
                            type='text'
                            placeholder='Username'
                            value={this.state.username ? this.state.username : ''}
                            onChange={ (val) => this.setInputValue('username', val) }
                        />
                        <InputField
                            type='password'
                            placeholder='Password'
                            value={this.state.password ? this.state.password : ''}
                            onChange={ (val) => this.setInputValue('password', val) }
                        />
                        <br></br>
                        <SubmitButton
                            text='Login'
                            disabled={this.state.buttonDisabled}
                            onClick={ () => this.doLogin() }
                        />
                        <br></br> 
                        <h3 className="white">Don't have an account? Register here</h3>
                        <SubmitButton
                            text='Register'
                            disabled={this.state.buttonDisabled}
                            onClick={ () => this.ToRegister() }
                        />     
                </div>        
            </div>        
            );
        }
    }

export default LoginForm;
