import weather from '../data/current-weather.js';

function currentWeather(weather){
    //loader
    //date
    //city
    const $currentWeatherCity = document.querySelector('#current-weather-city')
    $currentWeatherCity.textContent = ''
    //temp
    //background
}



export default function currentWeather(){
    // GEO //API -Weather // config
    configCurrentWeather(weather)
    console.log(weather);
}
