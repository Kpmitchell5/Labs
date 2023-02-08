import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import GetWeatherData from "../services/WeatherService";

export function WeatherForecast() {
  const [weather, setWeather] = useState<Weather>();

  // useEffect hook, second parameter is optional
  // lifecycle
  useEffect(() => {
    // call our api and put stuff on the screen
    GetWeatherData().then((data) => setWeather(data));
  }, []);

  // dependency
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  let periods = weather?.properties.periods;

  let displayPeriods = periods?.map((period) => (
    <ul>
      <li>{period.name}</li>
      <img src={period.icon}></img>
      <li>{period.detailedForecast}</li>
      <li>
        {period.temperature}
        {period.temperatureUnit}
      </li>
    </ul>
  ));

  return (
    <div className="WeatherForecast">
      {weather !== undefined && <>{displayPeriods}</>}
    </div>
  );
}
