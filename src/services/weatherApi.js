import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://weatherbit-v1-mashape.p.rapidapi.com/current";

const apiKey = import.meta.env.VITE_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon }) =>
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
