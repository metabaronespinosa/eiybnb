import React from 'react'

import WeatherIcons from 'components/WeatherIcons'
import DestinationsBox from 'components/DestinationsBox'
import PlaceBox from 'components/PlaceBox'
import SearchBar from './SearchBar'
import './styles.scss'

export default class EiybnbControls extends React.PureComponent {
  render() {
    const {
      geocoderRef,
      selectedCategory,
      onSelectCategory,
      onGetPlaceInfo,
      currentPlace,
      loading
    } = this.props

    return (
      <div className="eiybnb-controls-container">
        <SearchBar geocoderRef={geocoderRef} />
        <PlaceBox {...currentPlace} loading={loading} />
        <WeatherIcons selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
        <DestinationsBox selectedCategory={selectedCategory} onGetPlaceInfo={onGetPlaceInfo} />
      </div>
    )
  }
}
