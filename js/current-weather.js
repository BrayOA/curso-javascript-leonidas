import weather from '../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-date.js'
import {weatherConditionsCode} from './constants.js'

//weather.main.temp
//weatherConditionsCode []


function setCurrentCity ($el, city){
    $el.textContent = city
}

function setCurrentDate ($el){
    const date = new Date ()
    const formattedDate = formatDate (date)
    $el.textContent = formattedDate

}

function setCurrentTemp ($el, temp){
    $el.textContent = formatTemp(temp)
}

function solarStatus(sunsetTime, sunriseTime) {
    const currentHours = new Date().getHours()
    const sunsetHours = sunsetTime.getHours()
    const sunriseHours = sunriseTime.getHours ()


    if(currentHours > sunriseHours || currentHours < sunriseHours){
        return 'night' 
    }
    
    return 'morning'
}

function setBackground ($el, conditioncode, solarStatus) {
    const weatherType = weatherConditionsCode [conditioncode]
    $el.style.backgroundImage = `url(./images/${solarStatus}-${weatherType}.jpg)`
}

function configCurrentWeather(weather){

    //loader
    //date
    const $currentWeatherDate = document.querySelector('#current-weather-date')
    setCurrentDate($currentWeatherDate)
    //city
     const $currentWeatherCity = document.querySelector('#current-weather-city')
     const city = weather.name
     setCurrentCity($currentWeatherCity, city)
    //temp
    const $currentWeatherTemp = document.querySelector('#current-weather-temp')
    const temp = weather.main.temp
    setCurrentTemp($currentWeatherTemp, temp)



    //background
    const sunriseTime = new Date ( weather.sys.sunrise * 1000)
    const sunsetTime = new Date (  weather.sys.sunset *1000)
    const $app =document.querySelector('#app')
    const conditioncode = String (weather.weather[0].id).charAt(0)
    setBackground($app, conditioncode, solarStatus(sunriseTime, sunsetTime))

}

export default function currentWeather() {
    //GEO // API - weather // config
    configCurrentWeather(weather)
    console.log(weather);
}