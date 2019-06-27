import { call, put, takeLatest } from 'redux-saga/effects'
import weather from 'openweather-apis'

import { onGetPlaceWeatherForecastSuccess } from './actions'
import { GET_PLACE_WEATHER_FORECAST } from './constants'

weather.setLang('en')
weather.setAPPID('a3166fb70916fe0defca82b7a11a608d')

const getWeather = () => new Promise((resolve, reject) => {
  weather.getSmartJSON((error, result) => {
    if (error) reject(error)

    resolve(result)
  })
})

function* getPlaceWeatherForecast({ payload }) {
  weather.setCoordinate(...payload)
  const result = yield call(getWeather)
  yield put(onGetPlaceWeatherForecastSuccess(result))
}

export default function* homeSagas() {
  yield takeLatest(GET_PLACE_WEATHER_FORECAST, getPlaceWeatherForecast)
}
