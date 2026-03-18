// Import dom elements
import {
  headerTemperature,
  headerUnitC,
  headerUnitF,
  contentTemperature,
} from './domManager.js';

// Temperature Unit Manager
// ------------------------
// Change the temperature unit (Celsius or Fahrenheit)
export default function getTempUnitPreference() {
  if (localStorage.getItem('tempUnit') === null) {
    localStorage.setItem('tempUnit', 'metric');
  }
  const tempUnit = localStorage.getItem('tempUnit');
  return tempUnit;
}

function setTempUnitPreference(tempUnit) {
  localStorage.setItem('tempUnit', tempUnit);
}

function convertTempUnit(temp, unit) {
  if (unit === 'metric') {
    return ((temp - 32) * 5) / 9;
  }
  return (temp * 9) / 5 + 32;
}

// Event Listeners for Temperature Unit Manager
// ---------------
// Change the temperature unit
headerUnitC.addEventListener('click', () => {
  if (headerUnitC.classList.contains('active')) {
    return;
  }
  headerUnitC.classList.add('active');
  headerUnitC.classList.remove('inactive');
  headerUnitF.classList.remove('active');
  headerUnitF.classList.add('inactive');
  setTempUnitPreference('metric');
  headerTemperature.textContent = `${convertTempUnit(headerTemperature.textContent.slice(0, -1), 'metric').toFixed(1)}°`;
  contentTemperature.textContent = `${convertTempUnit(contentTemperature.textContent.slice(0, -1), 'metric').toFixed(1)}°`;
});

headerUnitF.addEventListener('click', () => {
  if (headerUnitF.classList.contains('active')) {
    return;
  }
  headerUnitF.classList.add('active');
  headerUnitF.classList.remove('inactive');
  headerUnitC.classList.remove('active');
  headerUnitC.classList.add('inactive');
  setTempUnitPreference('imperial');
  headerTemperature.textContent = `${convertTempUnit(headerTemperature.textContent.slice(0, -1), 'imperial').toFixed(1)}°`;
  contentTemperature.textContent = `${convertTempUnit(contentTemperature.textContent.slice(0, -1), 'imperial').toFixed(1)}°`;
});
