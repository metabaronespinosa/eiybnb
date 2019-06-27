import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import EiybnbControls from 'components/EiybnbControls'
import Map from 'components/Map'
import PlaceBox from 'components/PlaceBox'
import { getPlaceWeatherForecast } from './actions'
import { makeSelectCurrentPlace, makeSelectLoading } from './selectors'
import reducer from './reducer'
import saga from './saga'
import './style.scss'

const DEFAULT_CENTER = [19.3690477, -99.1792873]

class HomePage extends React.PureComponent {
  geocoderRef = React.createRef()

  componentDidMount() {
    const { getPlaceWeatherForecast } = this.props

    getPlaceWeatherForecast(DEFAULT_CENTER)
  }

  render() {
    return (
      <div className="app-container">
        <EiybnbControls geocoderRef={this.geocoderRef} />
        <Map geocoderRef={this.geocoderRef} />
        <PlaceBox />
      </div>
    )
  }
}

HomePage.propTypes = {}

const mapDispatchToProps = (dispatch) => ({
  getPlaceWeatherForecast: (place) => dispatch(getPlaceWeatherForecast(place)),
})

const mapStateToProps = createStructuredSelector({
  currentPlace: makeSelectCurrentPlace(),
  loading: makeSelectLoading()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReducer = injectReducer({ key: 'home', reducer })
const withSaga = injectSaga({ key: 'home', saga })

export default compose(withReducer, withSaga, withConnect)(HomePage)
