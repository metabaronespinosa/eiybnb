import React from 'react'

import WeatherIcons from 'components/WeatherIcons'
import SearchBar from './SearchBar'
import './styles.scss'

export default class EiybnbControls extends React.PureComponent {
  render() {
    return (
      <div className="eiybnb-controls-container">
        <SearchBar />
        <WeatherIcons />
      </div>
    )
  }
}
