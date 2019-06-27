import React from 'react'

import Place from './Place'
import './styles.scss'

const places = {
  sunny: [
    {
      name: 'Acapulco',
      location: 'Guerrero, Mexico',
      center: [16.857116, -99.837575]
    },
    {
      name: 'Cancun',
      location: 'Quintana Roo',
      center: [21.1213285, -86.9192732]
    },
    {
      name: 'Vallarta',
      location: 'Puerto Vallarta, Jalisco',
      center: [0.6409485, -105.2595437]
    }
  ],
  flurries: [
    {
      name: 'Nevado',
      location: 'Nevado de Toluca, Toluca',
      center: [19.1078183, -99.7683607]
    }
  ],
  rainy: [
    {
      name: 'CDMX',
      location: 'Mexico',
      center: [19.3690477, -99.1792873]
    }
  ]
}

class DestinationsBox extends React.PureComponent {
  render() {
    const { onGetPlaceInfo, selectedCategory } = this.props

    return (
      <div className="places-box-container">
        {places[selectedCategory] && places[selectedCategory].map((place) => <Place key={place.name} {...place} onGetPlaceInfo={onGetPlaceInfo} />)}
        {!places[selectedCategory] && <p>No recomendations for this category :(</p>}
      </div>
    )
  }
}

export default DestinationsBox
