import { useGetWeatherQuery } from "../services/weatherApi";

export default function Weather({ country }) {
  const lat = country[0].capitalInfo.latlng[0];
  const lon = country[0].capitalInfo.latlng[1];

  const { data, isFetching } = useGetWeatherQuery({ lat, lon });

  if (isFetching) return "loading...";
  return (
    <div className="bg-slate-100 p-6 rounded-lg flex flex-col  gap-6 items-center justify-between   ">
      <div className="flex flex-col gap-6">
        <h2>Current Weather</h2>
        <h3 className="font-bold text-2xl">{country[0].capital}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
        <p className="font-black text-4xl">{data.main.temp}°C</p>
      </div>

      <div className="flex flex-col gap-6">
        <p>Feels like: {data.main.feels_like}°C</p>
        <p>Min temperature: {data.main.temp_min}°C</p>
        <p>Max temperature: {data.main.temp_max}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Pressure: {data.main.pressure}hpa</p>
        <p>Wind: {data.wind.speed}m/s</p>
      </div>
    </div>
  );
}
