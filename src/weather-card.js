import icon from "./assets/icons/search-icon.svg";

export default function createWeatherCard(data) {
  const weatherGrid = document.querySelector("#weather-grid");
  const cardContainer = createCardContainer(weatherGrid);
  createCardDay(cardContainer, data.datetime);
  createCurrentTemp(cardContainer, data.conditions, data.temp);
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

function createCurrentTemp(parent, conditions, temp) {
  const currentTempContainer = document.createElement("div");
  currentTempContainer.classList = "flex-container current-temp-container";

  const tempDataContainer = document.createElement("div");
  tempDataContainer.classList = "flex-container temp-data-container";
  currentTempContainer.append(tempDataContainer);

  //Replace src with ${conditions}
  const conditionsIcon = document.createElement("img");
  conditionsIcon.classList = "conditions-icon";
  conditionsIcon.src = icon;
  tempDataContainer.append(conditionsIcon);

  const currentTemp = document.createElement("p");
  currentTemp.classList = "current-temp";
  currentTemp.textContent = temp + "F";
  tempDataContainer.append(currentTemp);

  const conditionsText = document.createElement("p");
  conditionsText.classList = "conditions-text";
  conditionsText.textContent = conditions;
  currentTempContainer.append(conditionsText);

  parent.append(currentTempContainer);
}
