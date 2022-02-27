import React from 'react';
import './Projects.scss';
const formula = require('../../assets/img/projects/formula12.png');
const bugaet = require('../../assets/img/projects/bugaet.png');
const siHay = require('../../assets/img/projects/sihay.png');
const balones = require('../../assets/img/projects/balonesJacob.png');
const ohka = require('../../assets/img/projects/Ohka.png');
const velo = require('../../assets/img/projects/velocom2.png');

function ProjectComponent() {
    return (
        <>
            <div className='uk-container uk-padding-large' id="Projects">
                <h2 className='uk-text-center uk-text-uppercase'><strong>My Projects</strong></h2>
                <div data-uk-slideshow="animation: push; autoplay: true; max-height: 500; finite: false">

                    <div className="uk-position-relative uk-visible-toggle uk-light" data-tabindex="-1">

                        <ul className="uk-slideshow-items">
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={formula} alt="Velocom" data-uk-cover />
                                </div>
                            </li>
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={bugaet} alt="Bugaet" data-uk-cover />
                                </div>
                            </li>
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={siHay} alt="SiHay" data-uk-cover />
                                </div>
                            </li>
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={balones} alt="Balones Jacob" data-uk-cover />
                                </div>
                            </li>
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={ohka} alt="Ohka" data-uk-cover />
                                </div>
                            </li>
                            <li>
                                <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                    <img src={velo} alt="Velo" data-uk-cover />
                                </div>
                            </li>
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slideshow-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slideshow-item="next"></a>

                    </div>

                    <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
            </div>
        </>
    );
};

export default ProjectComponent;