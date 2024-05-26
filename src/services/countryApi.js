import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v3.1";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `${baseUrl}/all`,
    }),
    getCountry: builder.query({
      query: (name) => `${baseUrl}/name/${name}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryQuery } = countryApi;
