import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { getWeatherDataforCurrentLocation } from "./API";
import { useEffect } from "react";
import { useWeather } from "./Context/Weather";
import "./App.css";
import { use } from "react";

function App() {
  const weather = useWeather();
  console.log(weather)


  useEffect(() => {
    // getting currect location
    weather.fetchUserCurrentLocation();
  },[])
  return (
    <>
      <div className="App-box">
        <h1 className="heading">Weather App</h1>
        <Input placeholder="Enter Your City" />
        <Button value="Search" onClick={weather.fetchData}/>
        <Card />
        <Button value="Reset" onClick={weather.resetData}/>
      </div>
    </>
  );
}

export default App;
