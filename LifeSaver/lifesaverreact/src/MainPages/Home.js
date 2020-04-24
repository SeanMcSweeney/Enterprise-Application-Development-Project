import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* react bootstrap imports */
import { Jumbotron } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

/*images imported */
import title from '../img/gfx/title.png';
import mainmenu from '../img/level/mainmenu.png';
import test from '../img/level/test.png';
import test2 from '../img/level/test2.png';
import serveypersonone from '../img/eval/Survey Person1.png';
import serveypersontwo from '../img/eval/Survey Person2.png';
import serveypersonthree from '../img/eval/Survey Person3.png';
import serveypersononeaf from '../img/eval/Survey Person1 After.png';
import serveypersontwoaf from '../img/eval/Survey Person2 After.png';
import serveypersonthreeaf from '../img/eval/Survey Person3 After.png';
import map from '../img/paramedic/map1.png';
import building1 from '../img/paramedic/building1.jpg';
import building2 from '../img/paramedic/building2.jpg';
import building3 from '../img/paramedic/building3.jpg';
import cpr1 from '../img/paramedic/cpr1.jpg';
import cpr2 from '../img/paramedic/cpr2.jpg';
import cpr3 from '../img/paramedic/cpr3.jpg';
import cpr4 from '../img/paramedic/cpr4.jpg';
import sign from '../img/paramedic/sign.jpg';
import bookshelf from '../img/other images/Blender Bookshelf.png';
import sofa from '../img/other images/Blender.jpg';
import table from '../img/other images/BlenderTable.png';
import github from '../img/logos/githubicon.png';

import '../App.css';


class Home extends React.Component{

    render() {
        return (
        <div className="home">
            <img src={title} alt="title" width="100%"></img>
            <div className="homebox1">
                <Jumbotron>
                    <h2 className="Title2">LifeSaverVR</h2>
                    <p className="heading">Final Year Project TUD DT211C</p>
                    <br></br>
                    <h2 className="Title2">What is LifeSaverVR</h2>
                    <p className="othertext">LifeSaver is a VR simulation which focuses on training and testing users in the basic fundamentals of lifesaving. 
                        It is an immersive experience which utilises handtracking and mixed reality to give the user the best possible experience while training or while being tested. 
                        It features multiple different scenes each following the process of basic lifesaving. Whether you are new to CPR or an experienced paramedic LifeSaverVR has something for you.</p>
                    <br></br>
                    <h2 className="Title2">Getting Started</h2>
                    <p className="heading">To use LifeSaver in its full capacity the following is required.</p>
                    <li className="othertext"> Oculus Quest VR Headset </li>
                    <li className="othertext"> Handtracking Feature Enabled </li>
                    <li className="othertext"> Large Space to Navigate </li>
                </Jumbotron>
                <br></br>

                <p className="headingwhite"> Level Images </p>
                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> Main Menu Level </p>
                        <Image src={mainmenu} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Test Level </p>
                        <Image src={test} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Test Level Top View </p>
                        <Image src={test2} fluid />
                    </div>
                </div>
                <br></br>
                <br></br>

                <Jumbotron>
                    <h2 className="Title2">Does LifeSaverVR Work</h2>
                    <p className="othertext">LifeSaverVR has been evaluated by users and in every case the user has become more aware of the necessary steps to perform basic life saving.</p>
                    <br></br>
                    <h2 className="Title2">Can I Trust The Steps?</h2>
                    <p className="othertext">Every step in LifeSaverVR has been influenced by the american heart association (aha) and approved by paramedics.</p>
                </Jumbotron>
                <br></br>

                <p className="headingwhite"> Evaluation Images </p>
                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person One Before LifeSaverVR </p>
                        <Image src={serveypersonone} className="imgfix" fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person Two Before LifeSaverVR </p>
                        <Image src={serveypersontwo} className="imgfix" fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person Three Before LifeSaverVR </p>
                        <Image src={serveypersonthree} className="imgfix" fluid />
                    </div>
                </div>
                <br></br>

                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person One After LifeSaverVR </p>
                        <Image src={serveypersononeaf} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person Two After LifeSaverVR </p>
                        <Image src={serveypersontwoaf} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Person Three After LifeSaverVR </p>
                        <Image src={serveypersonthreeaf} fluid />
                    </div>
                </div>
                <br></br>

                <p className="headingwhite"> Paramedic images </p>
                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> Dublin Fire Brigafe Training Centre Image 1 </p>
                        <Image src={building1} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Dublin Fire Brigafe Training Centre Image 2 </p>
                        <Image src={building2} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Dublin Fire Brigafe Training Centre Image 3 </p>
                        <Image src={building3} fluid />
                    </div>
                </div>
                <br></br>
                
                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> CPR Example 1 </p>
                        <Image src={cpr1} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> CPR Example 2 </p>
                        <Image src={cpr2} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> CPR Example 3 </p>
                        <Image src={cpr3} fluid />
                    </div>
                </div>
                <br></br>

                <div class="row">
                    <div class="col-md-4">
                        <p className="othertextwhite"> CPR Example 4 </p>
                        <Image src={cpr4} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Dublin Fire Brigafe Training Centre Map </p>
                        <Image src={map} fluid />
                    </div>
                    <div class="col-md-4">
                        <p className="othertextwhite"> Dublin Fire Brigafe Training Centre Sign </p>
                        <Image src={sign} fluid />
                    </div>
                </div>
                <br></br>

                <Jumbotron>
                    <h2 className="Title2">Where did the resources come from?</h2>
                    <p className="othertext">All of the resources from LifeSaverVR were created and/or changed to fit the projects plan</p>
                    <br></br>
                    <h2 className="Title2">How can I try LifeSaverVR?</h2>
                    <p className="othertext">LifeSaverVR is currently only available on github to select individuals and will hopefully be available on the oculus store in the future</p>
                </Jumbotron>
                <br></br>

                <p className="headingwhite"> Development of Assets Using Blender</p>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="imgslider"
                        src={bookshelf}
                        alt="bookshelf"
                        />
                        <Carousel.Caption>
                        <h3>Blender Bookshelf</h3>
                        <p>A basic bookshelf created in blender</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="imgslider"
                        src={sofa}
                        alt="sofa"
                        />

                        <Carousel.Caption>
                        <h3>Blender Sofa</h3>
                        <p>A basic sofa created in blender</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="imgslider"
                        src={table}
                        alt="table"
                        />

                        <Carousel.Caption>
                        <h3>Blender Table</h3>
                        <p>A basic table created in blender</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                    <br></br>

                    <p className="headingwhite"> Download Here</p>
                    <a href="https://github.com/SeanMcSweeney/LifeSaverVR-">
                    <Image className="git" src={github} fluid/>
                    </a>
            </div>
        </div>
        );
    }

}

export default Home;