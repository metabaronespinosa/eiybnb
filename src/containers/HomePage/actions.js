import {
  GET_PLACE_WEATHER_FORECAST,
  ON_GET_PLACE_WEATHER_FORECAST_SUCCESS
} from './constants'

export const getPlaceWeatherForecast = (payload) => ({
  type: GET_PLACE_WEATHER_FORECAST,
  payload
})

export const onGetPlaceWeatherForecastSuccess = (payload) => ({
  type: ON_GET_PLACE_WEATHER_FORECAST_SUCCESS,
  payload
})
