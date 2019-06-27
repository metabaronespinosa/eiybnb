import React from 'react'
import { MdPlace } from 'react-icons/md'

import acapulco from 'images/acapulco.jpg'

const IMAGES = {
  acapulco
}

const Place = ({
  name,
  location,
  weatherForecast,
  center
}) => (
  <div className="place">
    <div className="thumb" style={{ backgroundImage: `url(${IMAGES[name.toLowerCase()]})` }} />
    <div className="content">
      <p>{name}</p>
      <span>{location}</span>
      <br />
      <div className="weather-next-week">Weather next week <span>{weatherForecast}</span></div>
    </div>
    <button className="maps-button" type="button" onClick={() => console.log(center)}>
      <MdPlace />
    </button>
  </div>
)

export default Place
