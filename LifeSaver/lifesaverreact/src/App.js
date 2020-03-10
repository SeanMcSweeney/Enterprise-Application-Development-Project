import React from 'react';
import UserStorage from './stored/UserStorage';
import { observer } from 'mobx-react';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import './App.css';
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
        UserStorage.loading = false;
        UserStorage.isLogged = true;
        UserStorage.username = result.username;
      }

      else {
        UserStorage.loading = false;
        UserStorage.isLoggedIn = false;
      }

    }

    catch(e){
      UserStorage.loading = false;
      UserStorage.isLoggedIn = false;
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
        UserStorage.isLoggedIn = false;
        UserStorage.username = '';
      }
    }

    catch(e){
      console.log(e)
    }

  }
  render() {

    if (UserStorage.loading) {
      return (
        <div className="app">
          <div className="container">
            Loading, please wait..
          </div>
        </div>
      );
    }

    else {
      if (UserStorage.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStorage.username}

              <SubmitButton
                text={'Log Out'}
                disabled={false}
                OnClick={() => this.doLogout() }
              />
            </div>
          </div>
        );
      }
    }

    return (
      <div className="app">
        <div className="container">
          Log In
          <LoginForm
          />
        </div>
      </div>
    );
  }
}

export default observer(App);
