import React from "react";
import { useWeather } from "../Context/Weather";
import "../App.css";
const Input = () => {
  const weather = useWeather();
  console.log("weather", weather);
  return (
    <input
      className="input"
      placeholder="Type Your City Here ..."
      value={weather.searchCity}
      onChange={(e) => weather.setsearchCity(e.target.value)}
    />
  );
};

export default Input;
