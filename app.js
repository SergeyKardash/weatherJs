// Init Storage
const storage = new Storage;
const weatherLocation = storage.getLocationData()
// Init Weather class
const weather = new Weather(weatherLocation);
// Init UI
const ui = new UI;

// DOM Loaded eventListener
document.addEventListener('DOMContentLoaded', getWeather)

// Change Location Event
document.getElementById('w-changeBtn').addEventListener('click', e => {
  const city = document.getElementById('city').value;

  weather.changeLocation (city);
  storage.setLocationData (city);

  getWeather();
  
  $('#locModal').modal('hide')
})

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