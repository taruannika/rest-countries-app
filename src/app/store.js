import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../services/countryApi";
import { weatherApi } from "../services/weatherApi";

export default configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      countryApi.middleware,
      weatherApi.middleware,
    ]),
});
