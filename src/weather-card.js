export default function createWeatherCard(data) {
  const weatherGrid = document.querySelector("#weather-grid");
  const cardContainer = createCardContainer(weatherGrid);
  createCardDay(cardContainer, data.datetime);
}

function createCardContainer(parent) {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "flex-container weather-card-container";
  parent.append(cardContainer);
  return cardContainer;
}

function createCardDay(parent, day) {
  const cardDay = document.createElement("p");
  cardDay.classList = "card-day";
  cardDay.textContent = day;
  parent.append(cardDay);
  return cardDay;
}