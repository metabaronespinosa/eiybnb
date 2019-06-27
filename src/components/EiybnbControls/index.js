import React from 'react'

import WeatherIcons from 'components/WeatherIcons'
import DestinationsBox from 'components/DestinationsBox'
import SearchBar from './SearchBar'
import './styles.scss'

export default class EiybnbControls extends React.PureComponent {
  render() {
    const { geocoderRef, selectedCategory, onSelectCategory } = this.props

    return (
      <div className="eiybnb-controls-container">
        <SearchBar geocoderRef={geocoderRef} />
        <WeatherIcons selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
        <DestinationsBox />
      </div>
    )
  }
}
