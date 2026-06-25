import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faGaugeHigh,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";

function WeatherStat({ weather }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      
      <div className="border p-4 rounded-xl">
        <FontAwesomeIcon icon={faDroplet} className="text-2xl mb-2" />
        <h3>Humidity</h3>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="border p-4 rounded-xl">
        <FontAwesomeIcon icon={faWind} className="text-2xl mb-2" />
        <h3>Wind Speed</h3>
        <p>{weather.wind.speed} km/h</p>
      </div>

      <div className="border p-4 rounded-xl">
        <FontAwesomeIcon icon={faGaugeHigh} className="text-2xl mb-2" />
        <h3>Pressure</h3>
        <p>{weather.main.pressure} hPa</p>
      </div>

      <div className="border p-4 rounded-xl">
        <FontAwesomeIcon icon={faTemperatureHalf} className="text-2xl mb-2" />
        <h3>Feels Like</h3>
        <p>{Math.round(weather.main.feels_like)}°C</p>
      </div>

    </div>
  );
}

export default WeatherStat;