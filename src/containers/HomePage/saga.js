import { takeLatest } from 'redux-saga/effects'

import { GET_PLACE_WEATHER_FORECAST } from './constants'

function* getPlaceWeatherForecast(a) {
  yield console.log('jahsdljads', a)
}

export default function* homeSagas() {
  yield takeLatest(GET_PLACE_WEATHER_FORECAST, getPlaceWeatherForecast)
}
