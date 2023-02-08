import axios from "axios";
import { Weather } from "../models/Weather";

export default function GetWeatherData(): Promise<Weather> {
  return axios
    .get<Weather>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => response.data);
}
