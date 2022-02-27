import React from 'react';
import "./Home.scss";
import Typewriter from 'typewriter-effect';

function HomeComponent() {

    return (
        <div className="uk-position-center container uk-container">
            <h1 className="uk-heading-medium">Erik Garfia Acevedo</h1>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('| Programmer | Web Developer | Mobile Developer | Computer Systems Engineer |')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />
        </div>
    );
};

export default HomeComponent;