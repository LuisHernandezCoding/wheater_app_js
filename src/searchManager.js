import {
  searchBarInput,
  searchBarButton,
  warningAlert,
  warningAlertMessage,
} from './domManager.js';
import { filterData, getUserLocationByCityName } from './locationManager.js';
import { getWeatherData, updateWeatherData } from './weatherManager.js';
import getTempUnitPreference from './temperatureManager.js';

// Search Manager
// --------------
// searchForCity
export async function searchForCity(city) {
  if (city === '' || city.length < 3) {
    return;
  }
  searchBarInput.disabled = true;
  searchBarButton.classList.add('is-loading');
  const unit = getTempUnitPreference();
  const location = await getUserLocationByCityName(city);
  if (location.error) {
    searchBarInput.disabled = false;
    searchBarButton.classList.remove('is-loading');
    warningAlert.classList.remove('is-hidden');
    warningAlertMessage.innerHTML = 'We couldn\'t find your city. Please try again.';
    return;
  }
  const filteredLocation = await filterData(location);
  const weatherData = await getWeatherData(filteredLocation, unit);
  updateWeatherData(weatherData, filteredLocation);
  searchBarInput.disabled = false;
  searchBarButton.classList.remove('is-loading');
}

searchBarButton.addEventListener('click', () => {
  searchBarInput.focus();
});

searchBarInput.addEventListener('keyup', (e) => {
  if (searchBarInput.value === '') {
    return;
  }
  if (e.keyCode === 13) {
    searchBarButton.click();
  }
});

searchBarInput.addEventListener('focus', () => {
  searchBarInput.value = '';
});

export async function getCities(cityName) {
  const response = await fetch(`http://api.geonames.org/searchJSON?name_startsWith=${cityName}&username=weatherapp`);
  const data = await response.json();

  // Filter the data, only keep the cities and 5000+ population
  data.geonames = data.geonames.filter((city) => city.fcodeName === 'city, village,...' || city.population > 5000);
  // Double check the name
  data.geonames = data.geonames.filter((city) => city.toponymName
    .toLowerCase().startsWith(cityName.toLowerCase()));
  // Eliminate duplicates
  data.geonames = data.geonames.filter((city, index, self) => self.findIndex((t) => (
    t.toponymName === city.toponymName
    && t.adminName1 === city.adminName1
    && t.countryCode === city.countryCode
  )) === index);

  // then order by population
  data.geonames.sort((a, b) => {
    if (a.population > b.population) {
      return -1;
    }
    if (a.population < b.population) {
      return 1;
    }
    return 0;
  });
  // then slice the array to keep only the 5 first cities
  data.geonames = data.geonames.slice(0, 5);

  // Return the list of cities
  return data.geonames;
}
