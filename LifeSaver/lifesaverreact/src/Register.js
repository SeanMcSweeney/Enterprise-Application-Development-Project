import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stored/UserStore';

class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            aboutme: '',
            username: '',
            password: '',
            passwordconf: '',
            buttonDisabled: false
        }
        this.Submit = this.Submit.bind(this);
    }

    resetForm() {
        this.setState({
            email: '',
            username: '',
            aboutme: '',
            password: '',
            passwordconf: '',
            buttonDisabled: false
        })
    }

    async Submit() {

        if (!this.state.username) {
            alert("You must enter a username");
            return;
        }
        else if (!this.state.password) {
            alert("You must enter a password");
            return;
        }
        else if (!this.state.email) {
            alert("You must enter a email");
            return;
        }
        else if (!this.state.aboutme) {
            alert("You must enter a about yourself");
            return;
        }

        if (this.state.passwordconf != this.state.password){
            alert("Your passwords do not match");
            return;
        }

        if (this.state.passwordconf != this.state.password){
            alert("Password must contain at least 1 number, 1 uppercase letter and 1 lowercase letter");
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/register', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    passwordconf: this.state.passwordconf,
                    aboutme: this.state.aboutme,
                    email: this.state.email
                })
            });

            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                console.log("registered")
                alert("your account has been created");
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
            <div className="registerform">
                <p className="logintitle"> Register </p>
                    <div className="container3">
                        <InputField
                            type='email'
                            placeholder='Enter Email'
                            value={this.state.email ? this.state.email : ''}
                            onChange={ (val) => this.setInputValue('email', val) }
                        />
                        <p className="othertext2">We'll never share your email with anyone else.</p>

                        <InputField
                            type='text'
                            placeholder=' Enter Username'
                            value={this.state.username ? this.state.username : ''}
                            onChange={ (val) => this.setInputValue('username', val) }
                        />
                        <InputField
                            type='text'
                            placeholder=' Enter something about yourself (keep it short and sweet)'
                            value={this.state.aboutme ? this.state.aboutme : ''}
                            onChange={ (val) => this.setInputValue('aboutme', val) }
                        />
                        <InputField
                            type='password'
                            placeholder='Enter Password'
                            value={this.state.password ? this.state.password : ''}
                            onChange={ (val) => this.setInputValue('password', val) }
                        />
                        <p className="othertext2">Password must contain at least 1 number, 1 uppercase letter and 1 lowercase letter</p>
                        <InputField
                            type='password'
                            placeholder='Re-enter Password'
                            value={this.state.passwordconf ? this.state.passwordconf : ''}
                            onChange={ (val) => this.setInputValue('passwordconf', val) }
                        />
                        <br></br>

                        <SubmitButton
                        text='Register'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.Submit() }
                        />
                    </div>
                </div>
        );
    }
}

export default Register;
