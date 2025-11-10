const convertToCelsius = function(f) {
  if (typeof f === 'number' && !isNaN(f)) {
    let temp = (f - 32) * 5 / 9;
    temp = Number(temp.toFixed(1));
    return temp;
  }
  return "ERROR";
};

const convertToFahrenheit = function(c) {
  if (typeof c === 'number' && !isNaN(c)) {
    let temp = c * 9 / 5 + 32;
    temp = Number(temp.toFixed(1));
    return temp;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};




const convertToCelsius = function(f) {
  if (!(typeof f === 'number' && !isNaN(f))) {
    return "ERROR";
  }
  let temp = (f - 32) * 5 / 9;
  temp = Number(temp.toFixed(1));
  return temp;
  
};