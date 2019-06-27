import React from 'react'

import Place from './Place'
import './styles.scss'

const places = {
  sunny: [
    {
      name: 'Acapulco',
      location: 'Guerrero, Mexico',
      center: [16.857116, -99.837575]
    }
  ]
}

class DestinationsBox extends React.PureComponent {
  render() {
    const { onGetPlaceInfo, selectedCategory } = this.props

    return (
      <div className="places-box-container">
        {places[selectedCategory].map((place) => <Place key={place.name} {...place} onGetPlaceInfo={onGetPlaceInfo} />)}
      </div>
    )
  }
}

export default DestinationsBox
