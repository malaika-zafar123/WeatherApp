import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

function CurrentWeather({ weather }) {

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return faSun;
      case "Clouds":
        return faCloud;
      case "Rain":
        return faCloudRain;
      case "Snow":
        return faSnowflake;
      case "Thunderstorm":
        return faBolt;
      case "Mist":
      case "Fog":
      case "Haze":
        return faSmog;
      default:
        return faSun;
    }
  };

  const getWeatherColor = (condition) => {
    switch (condition) {
      case "Clear":
        return "text-yellow-300"; // Sun

      case "Clouds":
        return "text-gray-300"; // Clouds

      case "Rain":
        return "text-blue-400"; // Rain

      case "Snow":
        return "text-cyan-200"; // Snow

      case "Thunderstorm":
        return "text-purple-400"; // Thunderstorm

      case "Mist":
      case "Fog":
      case "Haze":
        return "text-slate-400"; // Mist/Fog

      default:
        return "text-yellow-300";
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-sky-500 rounded-3xl p-6 text-white">
      <div className="flex items-center gap-6">

        <FontAwesomeIcon
          icon={getWeatherIcon(weather.weather[0].main)}
          className={`text-7xl ${getWeatherColor(
            weather.weather[0].main
          )}`}
        />

        <div>
          <h2 className="text-6xl font-bold">
            {Math.round(weather.main.temp)}°C
          </h2>

          <p className="text-2xl">
            {weather.weather[0].main}
          </p>

          <p>
            {weather.name}
          </p>
        </div>

      </div>
    </div>
  );
}

export default CurrentWeather;