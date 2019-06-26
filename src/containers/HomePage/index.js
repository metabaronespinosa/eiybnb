import React from 'react'

import EiybnbControls from 'components/EiybnbControls'
import Map from 'components/Map'
import './style.scss'

export default class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div className="app-container">
        <EiybnbControls />
        <Map />
      </div>
    )
  }
}

HomePage.propTypes = {}
