import React from 'react'
import { useWeather } from "../Context/Weather";

import "../App.css"
const Card = () => {
    const weather = useWeather();
  console.log(weather)
  return (
    <div className='card'>
        <img src={weather?.data?.current?.condition?.icon} alt=""className='icon'/>
        <h4 className='condition'>{weather?.data?.current?.condition?.text}</h4>
        <h2 className='temp'>{weather?.data?.current?.temp_c}&deg;C</h2>
        <h3  className='Address'>{weather?.data?.location?.name} {weather?.data?.location?.region} {weather?.data?.location?.country}</h3>
        <div className='details'>
            <h3>Wind : {weather?.data?.current?.wind_kph} Km/H</h3>
            <h3>Pressure : {weather?.data?.current?.pressure_mb} Mb</h3>
            <h3>Humidity : {weather?.data?.current?.humidity}%</h3>
            <h3>Air Quality : {weather?.data?.current?.air_quality?.o3} </h3>

        </div>
    </div>
  )
}

export default Card