import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faCloud,
    faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
function WeeklyWeather({ forecast }) {

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return faSun;
    case "Clouds":
      return faCloud;
    case "Rain":
      return faCloudRain;
    default:
      return faSun;
  }
};

const getWeatherColor = (condition) => {
  switch (condition) {
    case "Clear":
      return "text-yellow-400";

    case "Clouds":
      return "text-gray-300";

    case "Rain":
      return "text-blue-400";

    default:
      return "text-yellow-400";
  }
};
    return (
        <div className="border p-4 rounded-2xl text-white">
            <h2 className="text-3xl mb-4">
                Weekly Weather
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {forecast.slice(0, 7).map((item, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded-xl text-center"
                    >
                        <FontAwesomeIcon
                            icon={getWeatherIcon(item.weather[0].main)}
                            className={`text-4xl mb-2 ${getWeatherColor(
                                item.weather[0].main
                            )}`}

                        />

                        <p>{item.dt_txt.split(" ")[0]}</p>
                        <p>{Math.round(item.main.temp)}°</p>
                        <p>{item.weather[0].main}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeeklyWeather;