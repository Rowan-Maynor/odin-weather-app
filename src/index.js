import "./styles.css";
import createWeatherCard from "./weather-card";

//City needs to use underscores instead of spaces, use regex to clean input.
//Using all lowercase will still return proper capitalized city data.

//temporarily store data so im not blowing API tokens with every reload
//Remove when website finished
if (sessionStorage.getItem("data")){
  console.log(JSON.parse(sessionStorage.getItem("data")));
} else {
  getWeather("Atlanta");
}

async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=PLZNP3RT4T5J5E6TVMEXRGX6A&contentType=json`,
  );
  const weatherData = await response.json();
  sessionStorage.setItem("data", JSON.stringify(weatherData));
  console.log(JSON.parse(sessionStorage.getItem("data")));
}

createWeatherCard();