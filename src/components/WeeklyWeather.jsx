function WeeklyWeather({ forecast }) {
  return (
    <div className="border p-4 rounded-2xl text-white">
      <h2 className="text-3xl mb-4">
        Weekly Weather
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

        {forecast.slice(0, 7).map((item, index) => {
          const [date, time] = item.dt_txt.split(" ");

          return (
            <div
              key={index}
              className="border p-4 rounded-xl text-center"
            >
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                alt="weather"
                className="w-20 h-20 mx-auto"
              />

              <p className="font-semibold">{date}</p>

              <p className="text-sm text-gray-300">
                {time}
              </p>

              <p className="text-2xl font-bold">
                {Math.round(item.main.temp)}°
              </p>

              <p>{item.weather[0].main}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default WeeklyWeather;