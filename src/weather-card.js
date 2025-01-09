import clearIcon from "./assets/icons/clear.svg";
import partiallyCloudyIcon from "./assets/icons/partially-cloudy.svg";
import snowIcon from "./assets/icons/snow.svg";

export default function createWeatherCard(data) {
  const weatherGrid = document.querySelector("#weather-grid");
  const cardContainer = createCardContainer(weatherGrid);
  createCardDay(cardContainer, data.datetime);
  createCurrentTemp(cardContainer, data.conditions, data.temp);
  createHiLowTemp(cardContainer, data.tempmax, data.tempmin);
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
  conditionsIcon.src = weatherCondition(conditions);
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

function createHiLowTemp(parent, highTemp, lowTemp) {
  const hiLowTempContainer = document.createElement("div");
  hiLowTempContainer.classList = "flex-container hi-low-temp-container";

  const hiTempContainer = document.createElement("div");
  hiTempContainer.classList = "flex-container hi-temp-container";
  hiLowTempContainer.append(hiTempContainer);

  const hiTempText = document.createElement("p");
  hiTempText.classList = "hi-temp-text";
  hiTempText.textContent = "High";
  hiTempContainer.append(hiTempText);

  const hiTempValue = document.createElement("p");
  hiTempValue.classList = "hi-temp-value";
  hiTempValue.textContent = highTemp;
  hiTempContainer.append(hiTempValue);

  const lowTempContainer = document.createElement("div");
  lowTempContainer.classList = "flex-container low-temp-container";
  hiLowTempContainer.append(lowTempContainer);

  const lowTempText = document.createElement("p");
  lowTempText.classList = "low-temp-text";
  lowTempText.textContent = "Low";
  lowTempContainer.append(lowTempText);

  const lowTempValue = document.createElement("p");
  lowTempValue.classList = "low-temp-value";
  lowTempValue.textContent = lowTemp;
  lowTempContainer.append(lowTempValue);

  parent.append(hiLowTempContainer);
}

function weatherCondition(conditions) {
  let conditionsArray = conditions.split(", ");

  if (conditionsArray.includes("Clear")) {
    return clearIcon;
  } else if (
    conditionsArray.includes("Snow") ||
    conditionsArray.includes("Ice")
  ) {
    return snowIcon;
  } else if (conditionsArray.includes("Partially cloudy")) {
  /*
  Partially cloudy must be last because it can combo with other weather types.
  This makes it the lowest priority.
  */
    return partiallyCloudyIcon;
  } else {
    //This is temporary so things dont break, remove when all icons are set.
    return clearIcon;
  }
}
