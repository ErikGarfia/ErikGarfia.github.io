import React from 'react';
import './Technologies.scss';
const first = require('../../assets/img/mosaic/first.png');
const second = require('../../assets/img/mosaic/second.png');
const third = require('../../assets/img/mosaic/third.png');
const forth = require('../../assets/img/mosaic/forth.png');
const fifth = require('../../assets/img/mosaic/fifth.png');
const sixth = require('../../assets/img/mosaic/sixth.png');
const seventh = require('../../assets/img/mosaic/seventh.png');
const eight = require('../../assets/img/mosaic/eight.png');
const ninth = require('../../assets/img/mosaic/ninth.png');
const tenth = require('../../assets/img/mosaic/tenth.png');
const eleventh = require('../../assets/img/mosaic/eleventh.png');

function TechnoComponent() {
        return (
                <div className='uk-container uk-padding-large uk-margin-large-bottom' id="Technologies">
                        <h2 className='uk-text-center uk-text-uppercase'><strong>Technologies I know</strong></h2>
                        <div className="uk-margin-medium-top" data-uk-grid>
                                <ul className="honeycomb" lang="es">
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={first} />
                                                <div className="honeycomb-cell__title">React JS</div>
                                        </li>
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={second} />
                                                <div className="honeycomb-cell__title">Node JS</div>
                                        </li>
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={third} />
                                                <div className="honeycomb-cell__title">Angular</div>
                                        </li>
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={forth} />
                                                <div className="honeycomb-cell__title">Flutter</div>
                                        </li>
                                        <li className="honeycomb-cell uk-visible@s">
                                                <img className="honeycomb-cell__image" src={fifth} />
                                                <div className="honeycomb-cell__title">MongoDB</div>
                                        </li>
                                        <li className="honeycomb-cell uk-visible@s">
                                                <img className="honeycomb-cell__image" src={sixth} />
                                                <div className="honeycomb-cell__title">PostgreSQL</div>
                                        </li>
                                        <li className="honeycomb-cell uk-visible@s">
                                                <img className="honeycomb-cell__image" src={seventh} />
                                                <div className="honeycomb-cell__title">MySQL</div>
                                        </li>
                                        <li className="honeycomb-cell uk-visible@s">
                                                <img className="honeycomb-cell__image" src={eight} />
                                                <div className="honeycomb-cell__title">AdobeXD</div>
                                        </li>
                                        <li className="honeycomb-cell uk-visible@s">
                                                <img className="honeycomb-cell__image" src={ninth} />
                                                <div className="honeycomb-cell__title">Photoshop</div>
                                        </li>
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={tenth} />
                                                <div className="honeycomb-cell__title">Wordpress</div>
                                        </li>
                                        <li className="honeycomb-cell">
                                                <img className="honeycomb-cell__image" src={eleventh} />
                                                <div className="honeycomb-cell__title">AWS Services</div>
                                        </li>
                                </ul>
                        </div>
                </div>
        );
};

export default TechnoComponent;