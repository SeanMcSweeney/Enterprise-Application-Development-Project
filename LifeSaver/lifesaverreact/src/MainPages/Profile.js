import React from 'react';
import UserStore from '../stored/UserStore';
import InputField from '../InputField';

import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitButton from '../SubmitButton';

import '../App.css';


class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            passwordold: '',
            passwordnew: '',
            aboutme: '',
            buttonDisabled: false
        }
    }
    /* sets inputs*/
    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 20) {
            return;
        }
        this.setState({
            [property]: val
        })
    }
    /* resets form */
    resetForm() {
        this.setState({
            passwordold: '',
            passwordnew: '',
            aboutme: '',
            buttonDisabled: false
        })
    }
    /* changes user about me using fetch*/
    async AboutMe(){
        if (!this.state.aboutme) {
            alert("You must enter something about yourself");
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/aboutme', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    aboutme: this.state.aboutme,
                })
            });
            let result = await res.json();
            if (result && result.success) {
                alert("your aboutme section has been changed");
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
    /* changes user password using fetch*/
    async ChangePassword(){
        if (!this.state.passwordold) {
            alert("You must enter your old password");
            return;
        }
        else if (!this.state.passwordnew) {
            alert("You must enter a new password");
            return;
        }

        if (this.state.passwordnew == this.state.passwordold) {
            alert("You must choose a new password");
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/changepwd', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    passwordold: this.state.passwordold,
                    passwordnew: this.state.passwordnew,
                })
            });
            let result = await res.json();
            if (result && result.success) {
                alert("your password has been updated");
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
        <div className="home">
            <div className="container3">
                    <p className="heading">UserName</p>
                    <p className="othertext">{UserStore.username}</p>
                    <br></br>
                    <p className="heading">About Me</p>
                    <p className="othertext">{UserStore.aboutme}</p>
                    <br></br>

                    <p className="heading">Change About Me</p>
                    <InputField
                        type='text'
                        placeholder=' Enter something about yourself (keep it short and sweet)'
                        value={this.state.aboutme ? this.state.aboutme : ''}
                        onChange={ (val) => this.setInputValue('aboutme', val) }
                    />
                    <SubmitButton
                        text='Change About Me'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.AboutMe() }
                    /> 

                    <br></br>
                    <br></br>

                    <p className="heading">Change Password</p>
                    <InputField
                        type='password'
                        placeholder='Old Password'
                        value={this.state.passwordold ? this.state.passwordold: ''}
                        onChange={ (val) => this.setInputValue('passwordold', val) }
                    />
                    <InputField
                        type='password'
                        placeholder='New Password'
                        value={this.state.passwordnew ? this.state.passwordnew : ''}
                        onChange={ (val) => this.setInputValue('passwordnew', val) }
                    />
                    <SubmitButton
                        text='Change Password'
                        disabled={this.state.buttonDisabled}
                        onClick={ () => this.ChangePassword() }
                    />   
            </div>
        </div>
        );
    }

}

export default Profile;