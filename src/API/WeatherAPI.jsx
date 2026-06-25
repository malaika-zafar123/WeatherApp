const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherData = async (city) => {
  const currentRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const currentData = await currentRes.json();

  if (!currentRes.ok) {
    throw new Error(currentData.message);
  }

  const { lat, lon } = currentData.coord;
  
  console.log("API KEY:", API_KEY);
  const forecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  const forecastData = await forecastRes.json();
  return {
    current: currentData,
    forecast: forecastData.list,
  };
};