import React from 'react'

function WeatherData({weather}){
  const icon=`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  return (
    <div className='weather'>
      <div className='weather-info'>
        <p>{weather.name},{weather.sys.country}</p>
        <div>
         <img src={icon} alt={weather.weather[0].description}/>
        </div>
        <p style={{fontSize:"30px"}}>{weather.main.temp}&deg;c</p>
        <p>{weather.weather[0].description}</p>
      </div>
      <div className='weather-info'>
        <p>Humidity: <b>{weather.main.humidity}%</b></p>
        <p>Pressure: <b>{weather.main.pressure}</b></p>
        <p>Wind: <b>{weather.wind.speed} m/s</b></p>
        <p>Visibility: <b>{weather.visibility/1000} km</b></p>
        <p>Cloudiness: <b>{weather.clouds.all}%</b></p>
      </div>
    </div>
  )
}

export default WeatherData
