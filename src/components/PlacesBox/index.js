import React from 'react'

import acapulco from 'images/acapulco.jpg'
import Place from './Place'
import './styles.scss'

const places = {
  sunny: [
    {
      name: 'Acapulco',
      location: 'Guerrero, Mexico',
      image: acapulco,
      weatherForecast: '+17 °C',
      center: [16.857116, -99.837575]
    }
  ]
}

class PlacesBox extends React.PureComponent {
  render() {
    return (
      <div className="places-box-container">
        {places.sunny.map((place) => <Place key={place.name} {...place} />)}
      </div>
    )
  }
}

export default PlacesBox
