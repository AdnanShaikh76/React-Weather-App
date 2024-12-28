import { createContext, useContext, useState } from "react";
import {
  getWeatherDataforCity,
  getWeatherDataforCurrentLocation,
} from "../API/index.js";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchCity, setsearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataforCity(searchCity);
    setdata(response);
  };

  const fetchUserCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataforCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setdata(data));
    });
  };

  const resetData = () => {
    setdata(null);
    setsearchCity("");
    fetchUserCurrentLocation();
    console.log("reset Clicked");
  };
  return (
    <WeatherContext.Provider
      value={{ searchCity, data, setsearchCity, fetchData, resetData, fetchUserCurrentLocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
