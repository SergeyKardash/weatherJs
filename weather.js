class Weather {
  constructor(city, state){
    this.apiKey = '25d93a818e5a40a0',
    this.city = city,
    this.state = state
  }

  // Fetch weather from API

  async getWeather(){
   const response = await fetch (`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

   const responseData = await response.json();

   return responseData.current_observation
  }

  changeLocation(city, state) {
    this.sity = city;
    this.state = state;
  }
}