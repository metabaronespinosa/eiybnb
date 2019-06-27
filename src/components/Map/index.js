import React from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import { debounce } from 'lodash'

import 'mapbox-gl/dist/mapbox-gl.css'
import './styles.scss'

const TOKEN = 'pk.eyJ1IjoibWV0YWJhcm9uIiwiYSI6ImNqdnY2MjRmaDA4anA0OHM1NmRkY2Q5dXMifQ.LBG2c_Ip9INKczq1w1ivng'

export default class Map extends React.PureComponent {
  state = {
    viewport: {
      width: '100%',
      height: '100vh',
      latitude: 19.3690477,
      longitude: -99.1792873,
      zoom: 5,
      pitch: 48
    }
  }

  mapRef = React.createRef();

  componentDidMount() {
    const { viewport } = this.state

    window.addEventListener('resize', debounce(() => {
      this.setState({
        viewport: {
          ...viewport,
          width: '100%',
          height: '100vh',
          zoom: 10
        }
      })
    }, 100))
  }

  componentDidUpdate(prevProps) {
    const { currentPlace } = this.props
    const { viewport } = this.state

    if (currentPlace.name !== prevProps.currentPlace.name) {
      const [latitude, longitude] = currentPlace.center

      this.setState({ // eslint-disable-line react/no-did-update-set-state
        viewport: {
          ...viewport,
          longitude,
          latitude,
          zoom: 10,
          transitionDuration: 1000,
          transitionInterpolator: new FlyToInterpolator(),
        }
      })
    }
  }

  onViewportChange = (viewport) => {
    this.setState({ viewport })
  }

  mapLoaded = () => {
    const { viewport } = this.state

    this.setState({
      viewport: {
        ...viewport,
        zoom: 10,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
      }
    })
  }

  render() {
    const { viewport } = this.state
    const { geocoderRef, onSearchResult } = this.props

    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          ref={this.mapRef}
          onLoad={this.mapLoaded}
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/metabaron/cjxclp8ek0bpi1crpwlrsv0yn"
        >
          <Geocoder
            mapRef={this.mapRef}
            containerRef={geocoderRef}
            onResult={onSearchResult}
            mapboxApiAccessToken={TOKEN}
            placeholder="Search for a destination"
            countries="mx"
          />
        </ReactMapGL>
      </div>
    )
  }
}
