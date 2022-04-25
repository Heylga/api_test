import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Card.css';

function Card() {

    const APIkey = "18576d86977540378287181828946c69"
	const lat = "42.188111";
	const lon = "-8.803260";

    // useState
	// useEffect
	// loop
	// functions
	// variables

	// 1. call the data
	// 2. save it in some place
	// 3. show the data


    const [weather, setWeather] = useState (undefined);

    // call the data. when we do some change, we have to call the setWeather inside the useEffect . Otherwise it will be recalled uncontinously

    useEffect (() => {
        fetchWeatherApi();
    }, []);

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=42.188111&lon=-8.803260&appid=18576d86977540378287181828946c69"
    const fetchWeatherApi = () => 
        fetch (url)

        // in case of success
        .then((res) => res.json())

        // save the data in some place
        .then((data) => setWeather(data))

		//in case of error
        .catch((err) => console.error(err));
     
        const description = weather?.weather[0].description;
        const iconCode = weather?.weather[0].icon;
        const icon = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Circle-icons-weather.svg/512px-Circle-icons-weather.svg.png${iconCode}.png`;
        const main = weather?.weather[0].main;
        const id = weather?.weather[0].id;
        const city = weather?.name;
        const country = weather?.sys.country;
        const text = `The weather in ${city}, ${country} is ${description}`;

        


    return (
        <div>
        <div className="mdc-card">
            <div className="mdc-card__primary-action" tabIndex="0">
                {text}
                <img src={icon} width="100" />
                <div className="mdc-card__ripple"></div>
            </div>
            <div className="mdc-card__actions">
                <button
                    className="mdc-icon-button mdc-card__action mdc-card__action--icon"
                    aria-pressed="false"
                    aria-label="Add to favorites"
                    title="Add to favorites">
                    <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">
                        favorite
                    </i>
                    <i className="material-icons mdc-icon-button__icon">
                        favorite_border
                    </i>
                </button>
                <button
                    className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                    title="Share">
                    share
                </button>
                <button
                    className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                    title="More options">
                    more_vert
                </button>
            </div>
        </div>
    </div>
    );
  };
  
  export default Card
  

