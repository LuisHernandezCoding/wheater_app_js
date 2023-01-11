// import css
import './style.css';
// import DOM Manager
import {
  searchBarInput,
  searchBarButton,
  headerUnitC,
  headerUnitF,
  tempctx,
  humidityctx,
  windctx,
} from './domManager.js';
import { getUserCityByIP } from './locationManager.js';
import { getWeatherData, updateWeatherData, getForecastData } from './weatherManager.js';
import getTempUnitPreference from './temperatureManager.js';
import { searchForCity, getCities } from './searchManager.js';
import createChart from './chartManager.js';

// Add Event Listeners to the Search Bar
searchBarInput.addEventListener('input', async () => {
  if (searchBarInput.value === '' || searchBarInput.value.length < 3) {
    return;
  }
  searchBarButton.classList.add('is-loading');
  const cities = await getCities(searchBarInput.value);
  searchBarButton.classList.remove('is-loading');
  const citiesList = document.querySelector('#cities-list');
  citiesList.parentElement.classList.remove('is-hidden');
  citiesList.classList.add('has-background-primary-dark');
  citiesList.innerHTML = '';
  cities.forEach((city) => {
    const name = city.toponymName;
    const state = city.adminName1;
    const country = city.countryCode;
    const cityItem = document.createElement('li');
    cityItem.innerHTML = `
      <div class="has-background-primary-dark">
        <a class="dropdown-item has-text-white columns">
          <div class="column is-8 is-offset-2">
            <span class="icon is-small mx-4">
              <i class="fas fa-city"></i>
            </span>
            <span>${name} | ${state} | ${country} </span>
          </div>
        </a>
      </div>`;
    cityItem.addEventListener('click', () => {
      searchBarInput.value = city.toponymName;
      searchForCity(city.toponymName);
      citiesList.parentElement.classList.add('is-hidden');
    });
    citiesList.appendChild(cityItem);
  });
});

// First Run
// ---------
(async () => {
  searchBarInput.disabled = true;
  searchBarButton.classList.add('is-loading');

  const city = await getUserCityByIP();
  const unit = getTempUnitPreference();
  if (unit === 'metric') {
    headerUnitC.classList.add('active');
    headerUnitF.classList.add('inactive');
  }
  if (unit === 'imperial') {
    headerUnitF.classList.add('active');
    headerUnitC.classList.add('inactive');
  }
  const weatherData = await getWeatherData(city, unit);

  updateWeatherData(weatherData, city, unit);
  const forecastData = await getForecastData(city, unit);
  const tempData = [];
  const humidityData = [];
  const windData = [];
  forecastData.list.forEach((item) => {
    tempData.push(item.main.temp);
    humidityData.push(item.main.humidity);
    windData.push(item.wind.speed);
  });
  tempData.unshift(forecastData.list[0].main.temp);
  humidityData.unshift(forecastData.list[0].main.humidity);
  windData.unshift(forecastData.list[0].wind.speed);

  const temperatureColor = '255, 206, 86';
  const humidityColor = '54, 162, 235';
  const windColor = '255, 99, 132';

  tempctx.canvas.height = 150;
  humidityctx.canvas.height = 150;
  windctx.canvas.height = 150;
  await createChart('Temperature', tempctx, 'line', tempData.slice(0, 8), temperatureColor);
  await createChart('Humidity', humidityctx, 'bar', humidityData, humidityColor);
  await createChart('Wind', windctx, 'bar', windData, windColor);

  searchBarInput.disabled = false;
  searchBarButton.classList.remove('is-loading');
  const content = document.querySelector('#content');
  content.classList.remove('is-hidden');
})();
