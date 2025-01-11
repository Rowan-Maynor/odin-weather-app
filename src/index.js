import removeChildren from "./remove-children";
import "./styles.css";
import createWeatherCard from "./weather-card";

const cityName = document.querySelector("#city-name");
const cityForm = document.querySelector("#city-form");
const citySearch = document.querySelector("#city-search-input");
const weatherGrid = document.querySelector("#weather-grid");
const defaultText = document.querySelector("#default-text");

cityForm.addEventListener("submit", (event) =>{
  event.preventDefault();
  getWeather(citySearch.value);
});

async function getWeather(city) {
  if(defaultText){
    defaultText.remove();
  }
  removeChildren(weatherGrid);
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
