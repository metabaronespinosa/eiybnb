import React from 'react'
import ReactMapGL from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

export default class Map extends React.PureComponent {
  state = {
    viewState: {
      latitude: 19.3690477,
      longitude: -99.1792873,
      zoom: 11
    }
  }

  onViewStateChange = ({ viewState }) => {
    this.setState({ viewState })
  }

  render() {
    const { viewState } = this.state

    return (
      <div className="map-container">
        <ReactMapGL
          width="100%"
          height="100vh"
          viewState={viewState}
          onViewStateChange={this.onViewStateChange}
          mapboxApiAccessToken="pk.eyJ1IjoibWV0YWJhcm9uIiwiYSI6ImNqdnY2MjRmaDA4anA0OHM1NmRkY2Q5dXMifQ.LBG2c_Ip9INKczq1w1ivng"
          mapStyle="mapbox://styles/metabaron/cjxclp8ek0bpi1crpwlrsv0yn"
        />
      </div>
    )
  }
}
