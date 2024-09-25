const convertToCelsius = function(temperatureFahrenheit) {
  const temperatureCelsius = (temperatureFahrenheit - 32) * 5 / 9;
  const roundedTemperatureCelsius = Math.round(temperatureCelsius * 10) / 10
  return roundedTemperatureCelsius;
};

const convertToFahrenheit = function(temperatureCelsius) {
  const temperatureFahrenheit = temperatureCelsius * 9 / 5 + 32;
  const roundedTemperatureFahrenheit = Math.round(temperatureFahrenheit * 10) / 10
  return roundedTemperatureFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
