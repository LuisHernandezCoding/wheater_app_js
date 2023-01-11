// DOM managing
// ------------
// Search Bar
export const searchBarInput = document.querySelector('#search-bar-input');
export const searchBarButton = document.querySelector('#search-bar-button');

// Header
export const headerWeatherIcon = document.querySelector('#weather-icon');
export const headerTemperature = document.querySelector('#temperature-value');
export const headerUnitC = document.querySelector('.unit-c');
export const headerUnitF = document.querySelector('.unit-f');

export const headerLocation = document.querySelector('#content-location');
export const headerDateAndHour = document.querySelector('#content-date');
export const headerDescription = document.querySelector('#content-description');

// Content
export const contentTemperature = document.querySelector('#content-temperature-value');
export const contentHumidity = document.querySelector('#content-humidity-value');
export const contentWind = document.querySelector('#content-wind-value');

// Pagination
const temperatureButton = document.querySelector('#temperature-button');
const humidityButton = document.querySelector('#humidity-button');
const WindButton = document.querySelector('#wind-button');

const tempCanvas = document.querySelector('#tempChart');
const humidityCanvas = document.querySelector('#humidityChart');
const windCanvas = document.querySelector('#windChart');

// Canvas
export const tempctx = document.getElementById('tempChart').getContext('2d');
export const humidityctx = document.getElementById('humidityChart').getContext('2d');
export const windctx = document.getElementById('windChart').getContext('2d');

temperatureButton.addEventListener('click', () => {
  temperatureButton.classList.add('active');
  humidityButton.classList.remove('active');
  WindButton.classList.remove('active');
  tempCanvas.parentElement.classList.remove('is-hidden');
  humidityCanvas.parentElement.classList.add('is-hidden');
  windCanvas.parentElement.classList.add('is-hidden');
});

humidityButton.addEventListener('click', () => {
  temperatureButton.classList.remove('active');
  humidityButton.classList.add('active');
  WindButton.classList.remove('active');
  tempCanvas.parentElement.classList.add('is-hidden');
  humidityCanvas.parentElement.classList.remove('is-hidden');
  windCanvas.parentElement.classList.add('is-hidden');
});

WindButton.addEventListener('click', () => {
  temperatureButton.classList.remove('active');
  humidityButton.classList.remove('active');
  WindButton.classList.add('active');
  tempCanvas.parentElement.classList.add('is-hidden');
  humidityCanvas.parentElement.classList.add('is-hidden');
  windCanvas.parentElement.classList.remove('is-hidden');
});

// Warnings
export const warningAlert = document.querySelector('#warning-alert');
export const warningAlertMessage = document.querySelector('#warning-message');
const warningAlertClose = document.querySelector('#warning-close');

warningAlertClose.addEventListener('click', () => {
  warningAlert.classList.add('is-hidden');
});
