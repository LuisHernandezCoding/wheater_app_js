import {
  headerWeatherIcon,
  headerTemperature,
  headerLocation,
  headerDateAndHour,
  headerDescription,
  contentTemperature,
  contentHumidity,
  contentWind,
} from './domManager.js';

// Weather Manager
// ---------------
// Filter the weather data
async function filterWeatherData(weatherData) {
  const temperature = weatherData.main.temp;
  const { description } = weatherData.weather[0];
  const { icon } = weatherData.weather[0];
  const wind = weatherData.wind.speed;
  const { humidity } = weatherData.main;
  const { pressure } = weatherData.main;
  const { coord } = weatherData;
  const { timezone } = weatherData;
  const { dt } = weatherData;

  const data = {
    temperature,
    description,
    icon,
    wind,
    humidity,
    pressure,
    coord,
    timezone,
    dt,
  };

  return data;
}

// Render the weather data to the DOM
async function renderWeatherData(data, location) {
  // Header
  headerWeatherIcon.src = `https://openweathermap.org/img/w/${data.icon}.png`;
  headerWeatherIcon.alt = data.description;
  headerTemperature.textContent = `${data.temperature.toFixed(1)}°`;
  headerLocation.textContent = `${location}`;

  // Get city offset
  const cityOffset = data.timezone / 3600;
  // Get City time
  const cityDateAndHour = new Date((data.dt * 1000) + (cityOffset * 3600 * 1000)).toLocaleString('en-US', { timeZone: 'UTC' });

  headerDateAndHour.textContent = cityDateAndHour;
  headerDescription.textContent = data.description;

  // Content
  contentTemperature.textContent = `${data.temperature}°`;
  contentHumidity.textContent = `${data.humidity}%`;
  contentWind.textContent = `${data.wind} m/s`;
}

// Get the weather data by location (openweathermap.org)
export async function getWeatherData(location, unit = 'metric') {
  const apiKey = '0c5084d5e17077f9e8e3fab5e86a5fd0';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`);
  const data = await response.json();

  return data;
}

// Update the weather data (get the data, filter it and render it)
export async function updateWeatherData(weatherData, location) {
  const data = await filterWeatherData(weatherData);
  renderWeatherData(data, location);
}

// Get the forecast data by location (openweathermap.org)
export async function getForecastData(location, unit = 'metric') {
  const apiKey = '0c5084d5e17077f9e8e3fab5e86a5fd0';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${unit}`);
  const data = await response.json();

  return data;
}
