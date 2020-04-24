import React, { useState } from 'react';
import UserStore from './stored/UserStore';
import PageStore from './stored/PageStore';
import { observer } from 'mobx-react';
import LoginForm from './LoginForm';
import Register from './Register';
import Info from './MainPages/Information';
import Home from './MainPages/Home';
import Admin from './MainPages/Admin';
import Profile from './MainPages/Profile';
import ParticleMaker from './ParticleMaker';
import ParticleMaker2 from './ParticleMaker2';
import NavbarLogin from './NavbarLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitButton from './SubmitButton';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import './App.css';

/* Main page */
/* All code inspired by https://medium.com/@avanthikameenakshi/crud-react-express-99025f03f06e, youtube series starting at: https://www.youtube.com/watch?v=4BhhGs0PFHU&t=1137s&pbjreload=10 
and https://reactjs.org/docs/faq-ajax.html as well as the bootstrap-react documentation and the react documentation*/

class App extends React.Component{

  async componentDidMount(){

    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        UserStore.aboutme = result.aboutme;
        if (result.admin == "yes"){
          console.log(result.admin);
          UserStore.admin = true;
          PageStore.admin = true;

        }
        else{
          console.log(result.admin);
          UserStore.admin = false;
          PageStore.admin = false;
        }
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    }

    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  }

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
  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="infobox1">
            Loading, please wait.. <Spinner animation="grow" variant="secondary" />
          </div>
        </div>
      );
    }

    else {
      if (UserStore.isLoggedIn) {
        if (PageStore.home) {
          return (
            <div className="app"> 
              <NavbarLogin />
                <div className="app"> 
                <h2 className="heading"> Welcome {UserStore.username} </h2>
                  <Home/>
                </div>
            </div>
          );
        }

        if (PageStore.information) {
          return (
            <div className="app"> 
              <NavbarLogin />
                <div className="app"> 
                  <Info/>
                </div>
            </div>
          );
        }

        if (PageStore.admin) {
          return (
            <div className="app"> 
              <NavbarLogin />
                <div className="app"> 
                  <Admin/>
                </div>
            </div>
          );
        }

        if (PageStore.profile) {
          return (
            <div className="wrapper"> 
              <NavbarLogin />
                <div className="app"> 
                  <Profile/>
                </div>
            </div>
          );
        }
      }

      else{   
        if (PageStore.home) {
          return (
            <div className="wrapper"> 
              <NavbarLogin />
                <div className="app"> 
                  <Home/>
                </div>
            </div>
          );
        }

        if (PageStore.information) {
          return (
            <div className="app"> 
              <NavbarLogin />
                <div className="app"> 
                  <Info/>
                </div>
            </div>
          );
        }

        if (PageStore.login) {
          return (
            <div className="wrapper"> 
              <NavbarLogin />
                <div className="app"> 
                  <LoginForm/>
                </div>
            </div>
          );
        }

        if (PageStore.register) {
          return (
            <div className="wrapper"> 
              <NavbarLogin />
                <div className="app"> 
                  <Register/>
                </div>
            </div>
          );
        }
      }
    }
  }
}

export default observer(App);
