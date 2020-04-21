import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
class ParticleMaker extends React.Component{
render() {
    return (
        <div className="particle">

        <Particles 
              params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out"
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        }
                    },
                    modes: {
                        bubble: {
                            distance: 30,
                            duration: 5,
                            size: 0,
                            opacity: 0
                        },
                        repulse: {
                            distance: 400,
                            duration: 4
                        }
                    }
                }
              }}
                ></Particles>

        </div>
        );
    }
}

export default ParticleMaker;