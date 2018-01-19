// Init Weather class
const weather = new Weather('Boston', 'MA');

// DOM Loaded eventListener
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results)
    })
    .catch(err => {
      console.log(err)
    });
}