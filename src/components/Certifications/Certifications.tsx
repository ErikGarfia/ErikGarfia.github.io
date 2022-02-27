import React from 'react';

function CertificationsComponent() {
    return (
            <div className='uk-container uk-padding-large' id="Certifications">
                <h2 className='uk-text-center uk-text-uppercase'><strong>My Certifications</strong></h2>
                <div className="uk-grid uk-margin-medium-bottom">
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Solutions Architech AWS (in progress)</h3>
                            <p>Taking a course about designs, builds, deploys, and maintains business applications and critical infrastructure inside the AWS Cloud.</p>
                        </div>
                    </div>
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Huawei Mobile Services</h3>
                            <p>Learning about a collection of proprietary services and application programming interfaces developed by Huawei Technologies Co.</p>
                        </div>
                    </div>
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Introduction to Web Development I and II by Google</h3>
                            <p>Learning about basic things for web development, introduction to create responsive websites using technologies like HTML and CSS3.</p>
                        </div>
                    </div>
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">Certified in fundamentals for cloud in industry
                                4.0</h3>
                            <p>Understanding the industry´s evolution from craft manufacturing to mass customization and opportunities to generate revenue growth.</p>
                        </div>
                    </div>
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">B2 English Certification</h3>
                        </div>
                    </div>
                    <div className='uk-padding-small uk-width-1-2@m'>
                        <div className="uk-card uk-card-default uk-card-body">
                            <h3 className="uk-card-title">A2 German (in progress)</h3>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CertificationsComponent;