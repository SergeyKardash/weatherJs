// Init Weather class
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI;

// DOM Loaded eventListener
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results)
      ui.paint(results)
    })
    .catch(err => {
      console.log(err)
    });
}