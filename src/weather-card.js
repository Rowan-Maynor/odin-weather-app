export default function createWeatherCard() {
  const weatherGrid = document.querySelector("#weather-grid");
  createCardContainer(weatherGrid);
}

function createCardContainer(parent) {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "flex-container weather-card-container";
  parent.append(cardContainer);
}