import React from 'react';
import './myExperience.scss';
const firstPanel = require('../../assets/img/experience/firstPanel.png');

function Experience() {
    return (
            <div className='uk-padding-large uk-visible@m' id="Experience">
                <h2 className='uk-text-center uk-text-uppercase'><strong>My Experience</strong></h2>
                <section id="timeline">

                    <div className="tl-item">
                        <div className="tl-bg" style={{ background: 'url(https://placeimg.com/803/803/nature)' }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">Honeywell</p>
                        </div>
                        <div className="tl-content">
                            <h1>Engineer Support Intern</h1>
                            <p>Full time intern at Honeywell, mainly working with the Home and Building Technologies team, learning about security process and how to connect front-end modules developed with React and Honeywell´s hardware technologies.</p>
                            <p>January 2022 - Present</p>
                        </div>
                    </div>

                    <div className="tl-item">
                        <div className="tl-bg" style={{ background: 'url(https://placeimg.com/802/802/nature)' }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">Microsoft</p>
                        </div>
                        <div className="tl-content">
                            <h1 className="f3 text--accent ttu">Learn Student Ambassadors (Volunteering)</h1>
                            <p>Member of Microsoft Learn Student Ambassadors program, which is a global group of campus leaders who are eager to help fellow students, and develop technical and career skills for the future.</p>
                            <p>August 2020 - January 2022</p>
                        </div>
                    </div>

                    <div className="tl-item">
                        <div className="tl-bg" style={{ background: 'url(https://placeimg.com/801/801/nature)' }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">Ohka</p>
                        </div>
                        <div className="tl-content">
                            <h1 className="f3 text--accent ttu">Software Developer intern</h1>
                            <p>Intern at Ohka Systems, working with mobile technologies like Xamarin and Flutter, developing client´s projects to learn about SCRUM methodology; and web technologies like Web2py, developing the official Ohka´s website.</p>
                            <p>August 2021- January 2022</p>
                        </div>
                    </div>

                    <div className="tl-item">
                        <div className="tl-bg" style={{ background: 'url(https://placeimg.com/800/800/nature)' }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">NTT Data</p>
                        </div>
                        <div className="tl-content">
                            <h1 className="f3 text--accent ttu">Web Developer jr</h1>
                            <p>Web developer at NTT DATA, working with a project using Angular as main tool to develop it, learning construction of different components to integrate in a previous project created with an older version of Angular.</p>
                            <p>October 2021- January 2021</p>
                        </div>
                    </div>

                    <div className="tl-item">
                        <div className="tl-bg" style={{ background: 'url(https://placeimg.com/805/805/nature)' }}></div>
                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">RyE</p>
                        </div>
                        <div className="tl-content">
                            <h1 className="f3 text--accent ttu">Software Developer jr</h1>
                            <p>Software developer intern at RyE Digital Consultory, being developer of different website projects using mainly javascript language as well as Angular integrated with Amplify (AWS Services) making differents serverless websites.</p>
                            <p>August 2020- December 2021</p>
                        </div>
                    </div>
                </section>
            </div>
     
    )
}

export default Experience;