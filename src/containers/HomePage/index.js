import React from 'react'

import Map from 'components/Map'
import './style.scss'

export default class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div className="app-container">
        <Map />
      </div>
    )
  }
}

HomePage.propTypes = {}
