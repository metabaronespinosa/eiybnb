import React from 'react'

import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './styles.scss'

const SearchBar = ({ geocoderRef }) => (
  <div className="search-container" ref={geocoderRef} />
)

export default SearchBar
