import React, { useState } from 'react';
import UserStore from '../stored/UserStore';
import { observer } from 'mobx-react';
import LoginForm from '../LoginForm';
import ParticleMaker from '../ParticleMaker';
import ParticleMaker2 from '../ParticleMaker2';
import NavbarLogin from '../NavbarLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitButton from '../SubmitButton';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../App.css';


class Information extends React.Component{

    render() {
        return (
            <div className="info">
            <div className="infobox1">
                <Jumbotron>
                    <h2 className="Title2">LifeSaverVR</h2>
                    <p className="heading">Current Version = 1.0</p>
                    <br></br>
                    <h2 className="Title2">Link to Download</h2>
                    <p className="othertext"><a href="https://github.com/SeanMcSweeney/LifeSaverVR-">github</a></p>
                    <br></br>
                    <h2 className="Title2">What is necessary to use LifeSaverVR</h2>
                    <p className="heading">The following is required.</p>
                    <li className="othertext"> Oculus Quest VR Headset </li>
                    <li className="othertext"> Handtracking Feature Enabled </li>
                    <p className="heading">The following is advised.</p>
                    <li className="othertext"> Large Space to Navigate </li>
                </Jumbotron>
                <br></br>
                <br></br>
                <br></br>
                </div>
                </div>
        );
    }

}

export default Information;