import React from 'react'

import acapulco from 'images/acapulco.jpg'
import cancun from 'images/cancun.jpg'
import vallarta from 'images/vallarta.jpg'
import nevado from 'images/nevado.jpg'
import cdmx from 'images/cdmx.jpg'

const IMAGES = {
  acapulco,
  cancun,
  vallarta,
  nevado,
  cdmx
}

const Place = ({
  onGetPlaceInfo,
  ...place
}) => (
  <div className="place">
    <div className="thumb" style={{ backgroundImage: `url(${IMAGES[place.name.toLowerCase()]})` }} />
    <div className="content">
      <p>{place.name}</p>
      <span>{place.location}</span>
      <br />
    </div>
    <button className="maps-button" type="button" onClick={() => onGetPlaceInfo(place)}>
      Get info
    </button>
  </div>
)

export default Place
