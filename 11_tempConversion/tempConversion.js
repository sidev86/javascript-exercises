const convertToCelsius = function (fahrenheitTemp) {
  celsiusTempStr = ((fahrenheitTemp - 32) * (5 / 9)).toFixed(1);
  return Number(celsiusTempStr);
};

const convertToFahrenheit = function (celsiusTemp) {
  fahrenheitTempStr = (celsiusTemp * (9 / 5) + 32).toFixed(1);
  return Number(fahrenheitTempStr);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
