import "./styles.css";
import createWeatherCard from "./weather-card";

const cityName = document.querySelector("#city-name");

getWeather("New York");

async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&key=PLZNP3RT4T5J5E6TVMEXRGX6A&contentType=json`,
  );
  const weatherData = await response.json();
  console.log(weatherData);

  for (let i = 0; i < 14; i++) {
    createWeatherCard(weatherData.days[i]);
  }

  cityName.textContent = weatherData.resolvedAddress;
}
