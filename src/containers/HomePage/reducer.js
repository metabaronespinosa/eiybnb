import {
  GET_PLACE_WEATHER_FORECAST,
  ON_GET_PLACE_WEATHER_FORECAST_SUCCESS
} from './constants'

const initialState = {
  currentPlace: null,
  loading: false
}

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACE_WEATHER_FORECAST:
      return {
        ...state,
        loading: true
      }
    case ON_GET_PLACE_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        currentPlace: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default homeReducer
