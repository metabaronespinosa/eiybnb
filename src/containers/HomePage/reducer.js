import {
  GET_PLACE_WEATHER_FORECAST,
  ON_GET_PLACE_WEATHER_FORECAST_SUCCESS
} from './constants'

const initialState = {
  currentPlace: {
    name: 'Mexico City',
    location: 'Mexico',
    center: [19.3690477, -99.1792873]
  },
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
        currentPlace: {
          ...state.currentPlace,
          ...action.payload
        },
        loading: false
      }
    default:
      return state
  }
}

export default homeReducer
