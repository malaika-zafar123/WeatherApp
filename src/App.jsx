import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherStat from "./components/WeatherStat";
import WeeklyWeather from "./components/WeeklyWeather";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { getWeatherData } from "./API/WeatherAPI";

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        // Input empty ho to sab clear kar do
        if (!city.trim()) {
            setWeather(null);
            setForecast([]);
            setError("");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const data = await getWeatherData(city);

            setWeather(data.current);
            setForecast(data.forecast);
        } catch (err) {
            setError("City not found");
            setWeather(null);
            setForecast([]);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                console.log(lat, lon);
            },
            (error) => {
                console.log(error.message);
            }
        );
    }, []);

    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 ">
                <Navbar onSearch={fetchWeather} />

                <div className="p-6 flex flex-col gap-6">
                    {loading && <Loading />}

                    {error && (
                        <ErrorMessage message={error} />
                    )}

                    {weather && !loading && (
                        <>
                            <CurrentWeather weather={weather} />
                            <WeatherStat weather={weather} />
                            <WeeklyWeather forecast={forecast} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;