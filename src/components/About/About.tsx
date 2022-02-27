import React, { useState, useEffect } from 'react';
import './About.scss';

function AboutComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const [numberRandom, setNumber] = useState(0);

    //the [] means that is gonna run once, it is similar to ngOninit
    useEffect(() => {

        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    var number = Math.floor(Math.random() * result.length)
                    setNumber(number);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    return (
        <div className='uk-container uk-padding-large' id="About">
            <h2 className='uk-text-center uk-text-uppercase'><strong>About</strong></h2>
            <div className="uk-margin-medium-top" data-uk-grid>
                <div className='uk-width-1-2@m uk-text-center quoteContainer'>
                    <div className="uk-width-1-1">
                        <q className='quoteText'> {items[numberRandom]?.text || ""} </q>
                    </div>
                    <div className="uk-width-1-1 uk-text-right">
                        -<strong>{items[numberRandom]?.author || "Anonymous"}</strong>
                    </div>
                </div>
                <div className='uk-width-1-2@m uk-text-justify aboutContainer uk-flex-first uk-flex-last@m'>
                    <span className='aboutText'>
                        I am a Computer Systems Engineer graduated from <a href='https://www.escom.ipn.mx/' target={"blank"}>ESCOM</a>, IPN. I have experience in web development and mobile development using different technologies that are being so popular nowadays. I'm an interdisciplinary programmer working at the crossroads of technology. I love working with passionate and enthusiastic people, always trying to learn new technologies related with programming, cloud computing and machine learning.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;