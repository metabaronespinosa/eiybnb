import React from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

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

    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          onLoad={this.mapLoaded}
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoibWV0YWJhcm9uIiwiYSI6ImNqdnY2MjRmaDA4anA0OHM1NmRkY2Q5dXMifQ.LBG2c_Ip9INKczq1w1ivng"
          mapStyle="mapbox://styles/metabaron/cjxclp8ek0bpi1crpwlrsv0yn"
        />
      </div>
    )
  }
}
