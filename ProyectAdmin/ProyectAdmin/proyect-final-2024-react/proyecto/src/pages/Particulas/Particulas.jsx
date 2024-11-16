import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particulas = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="bitacora-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        shape: {
                            type: 'image',
                            image: {
                                src: 'path/to/plant-image.png',
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        size: {
                            value: 10,
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            onclick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
            {/* ...existing code... */}
        </div>
    );
};

export default Particulas;
