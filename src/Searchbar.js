import React, { useState } from 'react'
import WeatherData from './WeatherData'
function Searchbar(){
    const[city,setCity]=useState("")
    const[weather,setWeather]=useState("")
    const[error,setError]=useState("")
    const apiKey=process.env.REACT_APP_WEATHER_API_KEY
    const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${apiKey}`
    
    function handleClick(){
        if(city!==""){
            setError("")
            fetch(url).then(response=>{
                if(!response.ok){
                    throw new Error("Error Found"+response.statusText)
                }
                return response.json()
            }).then(data=>{
                if(data.length===0){
                    throw new Error("City not found")
                }
                const{lat,lon,}=data[0]
                const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                return fetch(weatherUrl)
            }).then(response=>{
                if(!response.ok){
                    throw new Error("Error Found"+response.statusText)
                }
                return response.json()
            }).then(data=>{
                return setWeather(data)
            }).catch(error=>{
               setError(error.message)
               setWeather("")
            })
        }
        else{
            setError("Enter the city name")
        }
        
    }
  return (
    <div>
        <div className='searchbar'>
            <input type='search' value={city} placeholder='Enter the city name' onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </div>
        <div className='weather-class'>
            {error?<p style={{fontSize:"30px"}}>{error}</p>:null}
            {weather?<WeatherData weather={weather}/>:null}
        </div>
    </div>
        
  )
}

export default Searchbar
