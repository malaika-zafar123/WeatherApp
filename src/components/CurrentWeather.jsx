function CurrentWeather({ weather }) {
  const iconCode = weather.weather[0].icon;

  return (
    <div className="bg-gradient-to-r from-blue-900 to-sky-500 rounded-3xl p-6 text-white">
      
      <div className="flex items-center gap-4">
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
          alt="weather icon"
          className="w-24 h-24"
        />

        <h2 className="text-6xl font-bold">
          {Math.round(weather.main.temp)}°C/°F
        </h2>
      </div>

      <p className="text-2xl font-medium">
        {weather.weather[0].main}
      </p>

      <p className="text-lg">
        {weather.name}
      </p>
    </div>
  );
}

export default CurrentWeather;