import weather from '../data/current-weather.js'
//weather.name

function configCurrentWeather(weather){

    //loader
    //date
    //city
     const $currentWeatherCity = document.querySelector('#current-weather-city')
     $currentWeatherCity.textContent = weather.name
    //temp
    //background

}



export default function currentWeather(){

    //GEO // API - weather // config
    configCurrentWeather(weather)
    console.log(weather);
}