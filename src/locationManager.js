// Location Manager (Outputs the user location data as a json object)
// ----------------

import { warningAlert, warningAlertMessage } from './domManager.js';

// Get the user City name by IP (ipapi.co)
export async function getUserCityByIP() {
  const response = await fetch('https://ipapi.co/json/');
  const json = await response.json();

  return json.city;
}

// Get the user location data by City Name (geocode.xyz)
// retry if the request fails 5 times, then return location by IP and display a warning
export async function getUserLocationByCityName(cityName) {
  const string = `https://geocode.xyz/${cityName}?json=1&auth=230885744853627176559x87866`;
  const response = await fetch(string);
  let json = await response.json();

  if (json.error) {
    // if we get 403, it means we've reached the limit of requests, lets try again in 2 seconds
    if (json.error.code === 403) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      json = await getUserLocationByCityName(cityName);
    }

    // if we get 404, it means the city doesn't exist, lets get the location by IP
    // if we get 400, bad request, lets get the location by IP
    if (json.error.code === 404 || json.error.code === 400) {
      warningAlert.classList.remove('is-hidden');
      warningAlertMessage.innerHTML = 'We couldn\'t find your city, so we\'re using your IP location instead.';
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const city = await getUserCityByIP();
      json = await getUserLocationByCityName(city);
    }
  }

  return json;
}

export async function filterData(json) {
  return json.standard.city;
}
