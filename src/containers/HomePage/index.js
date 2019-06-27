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

class HomePage extends React.PureComponent {
  geocoderRef = React.createRef()

  componentDidMount() {
    const { currentPlace } = this.props
    const { getPlaceWeatherForecast } = this.props

    getPlaceWeatherForecast(currentPlace.center)
  }

  render() {
    const { currentPlace } = this.props

    return (
      <div className="app-container">
        <EiybnbControls geocoderRef={this.geocoderRef} />
        <Map geocoderRef={this.geocoderRef} />
        <PlaceBox {...currentPlace} />
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
