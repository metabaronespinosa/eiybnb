import React from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

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
      zoom: 5
    }
  }

  mapRef = React.createRef();

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

  handleOnResult = ({ result }) => {
    console.log('ljashdlkajsd', result)
  }

  render() {
    const { viewport } = this.state
    const { geocoderRef } = this.props

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
            onResult={this.handleOnResult}
            mapboxApiAccessToken={TOKEN}
            placeholder="Search for a destination"
            countries="mx"
          />
        </ReactMapGL>
      </div>
    )
  }
}
