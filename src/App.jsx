import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherStat from "./components/WeatherStat";
import WeeklyWeather from "./components/WeeklyWeather";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import History from "./components/History";
import { getWeatherData, getWeatherByLocation } from "./API/WeatherAPI";

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [history, setHistory] = useState([]);

    const fetchWeather = async (city) => {

        try {
            setLoading(true);
            setError("");

            const data = await getWeatherData(city);

            setWeather(data.current);
            setForecast(data.forecast);

            setHistory((prev) => {
                if (prev.includes(data.current.name))
                    return prev;
                return [data.current.name, ...prev];
            })

        } catch (err) {
            setError("City not found");

        } finally {
            setLoading(false);
        }
    };
    // history saved
    useEffect(() => {
        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );
    }, [history]);
    //history load
    useEffect(() => {
        const savedHistory =
            JSON.parse(localStorage.getItem("history")) || [];

        setHistory(savedHistory);
    }, []);
    // current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    setLoading(true);
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    const data = await getWeatherByLocation(lat, lon)
                    setWeather(data.current);
                    setForecast(data.forecast);

                    
        setHistory((prev) => {
          if (prev.includes(data.current.name)) return prev;
          return [data.current.name, ...prev];
        });

                } catch {
                    setError("Unable to get Weather");
                } finally {
                    setLoading(false);
                }
            },
            () => {
                setError("Location Permission denied")
            }
        );
    }, []);

    return (
        
            <div className="flex-1 ">
                <Navbar onSearch={fetchWeather} />

                <div className="p-6 flex flex-col gap-6">
                    {loading && <Loading />}

                    {error && (
                        <ErrorMessage message={error} />
                    )}
                    <History
                        history={history}
                        onSelect={fetchWeather}
                    />
                    {weather && !loading && (
                        <>
                            <CurrentWeather weather={weather} />
                            <WeatherStat weather={weather} />
                            <WeeklyWeather forecast={forecast} />
                        </>
                    )}
                </div>
            </div>

    );
}

export default App;