// DOM Management
// --------------
// Load the Body
const body = document.querySelector('body');

// Create the container
const container = document.createElement('div');
container.setAttribute('id', 'container');
body.appendChild(container);

// DOM NAVBAR Management
// --------------
const navbar = document.createElement('div');
navbar.setAttribute('id', 'navbar');
container.appendChild(navbar);

// Create the Page Title
const pageTitle = document.createElement('h1');
pageTitle.setAttribute('id', 'page-title');
pageTitle.textContent = 'Weather App';
navbar.appendChild(pageTitle);

// Create the User Location
const userLocation = document.createElement('div');
userLocation.setAttribute('id', 'user-location');
navbar.appendChild(userLocation);

// Create the Search Bar
const searchBar = document.createElement('div');
searchBar.setAttribute('id', 'search-bar');
navbar.appendChild(searchBar);

// Create the Search Bar Input
const searchBarInput = document.createElement('input');
searchBarInput.setAttribute('id', 'search-bar-input');
searchBarInput.setAttribute('type', 'text');
searchBarInput.setAttribute('placeholder', 'Search for a location...');
searchBar.appendChild(searchBarInput);

// Create the Search Bar Button
const searchBarButton = document.createElement('button');
searchBarButton.setAttribute('id', 'search-bar-button');
searchBarButton.textContent = 'Search';
searchBar.appendChild(searchBarButton);

// Create the Main Content
const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'main-content');
container.appendChild(mainContent);

// Create the Content Header
const contentHeader = document.createElement('div');
contentHeader.setAttribute('id', 'content-header');
mainContent.appendChild(contentHeader);

// Create the Content Header Title
const contentHeaderTitle = document.createElement('h2');
contentHeaderTitle.setAttribute('id', 'content-header-title');
contentHeader.appendChild(contentHeaderTitle);

// Create the Content Header Subtitle
const contentHeaderSubtitle = document.createElement('p');
contentHeaderSubtitle.setAttribute('id', 'content-header-subtitle');
contentHeader.appendChild(contentHeaderSubtitle);

// Create the Content Body
const contentBody = document.createElement('div');
contentBody.setAttribute('id', 'content-body');
mainContent.appendChild(contentBody);

// Create the Content Body Temperature
const contentBodyTemperature = document.createElement('div');
contentBodyTemperature.setAttribute('id', 'content-body-temperature');
contentBody.appendChild(contentBodyTemperature);

// Create the Content Body Temperature Value
const contentBodyTemperatureValue = document.createElement('h2');
contentBodyTemperatureValue.setAttribute('id', 'content-body-temperature-value');
contentBodyTemperature.appendChild(contentBodyTemperatureValue);

// Create the Content Body Temperature Unit
const contentBodyTemperatureUnit = document.createElement('h2');
contentBodyTemperatureUnit.setAttribute('id', 'content-body-temperature-unit');
contentBodyTemperature.appendChild(contentBodyTemperatureUnit);

// Create the Content Body Description
const contentBodyDescription = document.createElement('div');
contentBodyDescription.setAttribute('id', 'content-body-description');
contentBody.appendChild(contentBodyDescription);

// Create the Content Body Description Value
const contentBodyDescriptionValue = document.createElement('p');
contentBodyDescriptionValue.setAttribute('id', 'content-body-description-value');
contentBodyDescription.appendChild(contentBodyDescriptionValue);

// Create the Content Body Description Icon
const contentBodyDescriptionIcon = document.createElement('img');
contentBodyDescriptionIcon.setAttribute('id', 'content-body-description-icon');
contentBodyDescription.appendChild(contentBodyDescriptionIcon);

// Create the Content Body coordinates (latitude and longitude)
const contentBodyCoordinates = document.createElement('div');
contentBodyCoordinates.setAttribute('id', 'content-body-coordinates');
contentBody.appendChild(contentBodyCoordinates);

// Create the Content Body coordinates latitude
const contentBodyCoordinatesLatitude = document.createElement('p');
contentBodyCoordinatesLatitude.setAttribute('id', 'content-body-coordinates-latitude');
contentBodyCoordinates.appendChild(contentBodyCoordinatesLatitude);

// Create the Content Body coordinates longitude
const contentBodyCoordinatesLongitude = document.createElement('p');
contentBodyCoordinatesLongitude.setAttribute('id', 'content-body-coordinates-longitude');
contentBodyCoordinates.appendChild(contentBodyCoordinatesLongitude);

// Create the Content Footer
const contentFooter = document.createElement('div');
contentFooter.setAttribute('id', 'content-footer');
mainContent.appendChild(contentFooter);

// Create the Content Footer Wind
const contentFooterWind = document.createElement('div');
contentFooterWind.setAttribute('id', 'content-footer-wind');
contentFooter.appendChild(contentFooterWind);

// Create the Content Footer Wind Title
const contentFooterWindTitle = document.createElement('p');
contentFooterWindTitle.setAttribute('id', 'content-footer-wind-title');
contentFooterWindTitle.textContent = 'Wind';
contentFooterWind.appendChild(contentFooterWindTitle);

// Create the Content Footer Wind Value
const contentFooterWindValue = document.createElement('p');
contentFooterWindValue.setAttribute('id', 'content-footer-wind-value');
contentFooterWind.appendChild(contentFooterWindValue);

// Create the Content Footer Wind Unit
const contentFooterWindUnit = document.createElement('p');
contentFooterWindUnit.setAttribute('id', 'content-footer-wind-unit');
contentFooterWind.appendChild(contentFooterWindUnit);

// Create the Content Footer Humidity
const contentFooterHumidity = document.createElement('div');
contentFooterHumidity.setAttribute('id', 'content-footer-humidity');
contentFooter.appendChild(contentFooterHumidity);

// Create the Content Footer Humidity Title
const contentFooterHumidityTitle = document.createElement('p');
contentFooterHumidityTitle.setAttribute('id', 'content-footer-humidity-title');
contentFooterHumidityTitle.textContent = 'Humidity';
contentFooterHumidity.appendChild(contentFooterHumidityTitle);

// Create the Content Footer Humidity Value
const contentFooterHumidityValue = document.createElement('p');
contentFooterHumidityValue.setAttribute('id', 'content-footer-humidity-value');
contentFooterHumidity.appendChild(contentFooterHumidityValue);

// Create the Content Footer Humidity Unit
const contentFooterHumidityUnit = document.createElement('p');
contentFooterHumidityUnit.setAttribute('id', 'content-footer-humidity-unit');
contentFooterHumidity.appendChild(contentFooterHumidityUnit);

// Create the Content Footer Pressure
const contentFooterPressure = document.createElement('div');
contentFooterPressure.setAttribute('id', 'content-footer-pressure');
contentFooter.appendChild(contentFooterPressure);

// Create the Content Footer Pressure Title
const contentFooterPressureTitle = document.createElement('p');
contentFooterPressureTitle.setAttribute('id', 'content-footer-pressure-title');
contentFooterPressureTitle.textContent = 'Pressure';
contentFooterPressure.appendChild(contentFooterPressureTitle);

// Create the Content Footer Pressure Value
const contentFooterPressureValue = document.createElement('p');
contentFooterPressureValue.setAttribute('id', 'content-footer-pressure-value');
contentFooterPressure.appendChild(contentFooterPressureValue);

// Create the Content Footer Pressure Unit
const contentFooterPressureUnit = document.createElement('p');
contentFooterPressureUnit.setAttribute('id', 'content-footer-pressure-unit');
contentFooterPressure.appendChild(contentFooterPressureUnit);

// Location Manager (Outputs the user location data as a json object)
// ----------------
// Get the user location data by IP (ipapi.co)
async function getUserLocationByIP() {
  const response = await fetch('https://ipapi.co/json/');
  const json = await response.json();

  const data = {
    city: json.city,
    state: json.region,
    country: json.country_name,
  };

  return data;
}

// Get the user location data by City Name (geocode.xyz)
async function getUserLocationByCityName(cityName) {
  const response = await fetch(`https://geocode.xyz/${cityName}?json=1`);
  const json = await response.json();

  const data = {
    city: json.standard.city,
    state: json.standard.prov,
    country: json.standard.countryname,
  };

  return data;
}

// Weather Manager
// ---------------
// Get the weather data by location (openweathermap.org)
async function getWeatherData(location) {
  const apiKey = '0c5084d5e17077f9e8e3fab5e86a5fd0';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  return data;
}

// Filter the weather data
async function filterWeatherData(weatherData) {
  const temperature = weatherData.main.temp;
  const { description } = weatherData.weather[0];
  const { icon } = weatherData.weather[0];
  const wind = weatherData.wind.speed;
  const { humidity } = weatherData.main;
  const { pressure } = weatherData.main;
  const { coord } = weatherData;

  const data = {
    temperature,
    description,
    icon,
    wind,
    humidity,
    pressure,
    coord,
  };

  return data;
}

// Render the weather data to the DOM
async function renderWeatherData(data) {
  contentHeaderTitle.textContent = `Weather for: ${data.location}`;
  contentHeaderSubtitle.textContent = `Today is ${new Date().toDateString()}`;
  contentBodyTemperatureValue.textContent = data.temperature;
  contentBodyTemperatureUnit.textContent = '°C';
  contentBodyDescriptionValue.textContent = data.description;
  contentBodyDescriptionIcon.src = `http://openweathermap.org/img/w/${data.icon}.png`;
  contentBodyCoordinatesLatitude.textContent = 'Latitude: ';
  contentBodyCoordinatesLatitude.textContent += data.coord.lat;
  contentBodyCoordinatesLongitude.textContent = 'Longitude: ';
  contentBodyCoordinatesLongitude.textContent += data.coord.lon;
  contentFooterWindValue.textContent = data.wind;
  contentFooterWindUnit.textContent = 'm/s';
  contentFooterHumidityValue.textContent = data.humidity;
  contentFooterHumidityUnit.textContent = '%';
  contentFooterPressureValue.textContent = data.pressure;
  contentFooterPressureUnit.textContent = 'hPa';
}

// Update the weather data (get the data, filter it and render it)
async function updateWeatherData(location) {
  const weatherData = await getWeatherData(location.city);
  const data = await filterWeatherData(weatherData);
  renderWeatherData(data);
}

// Search Manager
// --------------
// Get the location from the search input
searchBarButton.addEventListener('click', () => {
  (async () => {
    const location = await getUserLocationByCityName(searchBarInput.value);
    updateWeatherData(location);
  })();
});

// First Run
// ---------
(async () => {
  const location = await getUserLocationByIP();
  userLocation.textContent = `${location.city}, ${location.state}, ${location.country}`;
  updateWeatherData(location);
})();
