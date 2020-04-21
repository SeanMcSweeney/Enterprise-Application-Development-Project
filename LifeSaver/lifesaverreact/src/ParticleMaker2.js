import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
class ParticleMaker2 extends React.Component{
render() {
    return (
        <div className="particle">

        <Particles 
              params={{
                particles: {
                    number: {
                        value: 160,
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        }
                    }
                }
              }}
                ></Particles>

        </div>
        );
    }
}

export default ParticleMaker2;