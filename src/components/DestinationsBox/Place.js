import React from 'react'
import { MdPlace } from 'react-icons/md'

import acapulco from 'images/acapulco.jpg'

const IMAGES = {
  acapulco
}

const Place = ({
  name,
  location,
  center
}) => (
  <div className="place">
    <div className="thumb" style={{ backgroundImage: `url(${IMAGES[name.toLowerCase()]})` }} />
    <div className="content">
      <p>{name}</p>
      <span>{location}</span>
      <br />
    </div>
    <button className="maps-button" type="button" onClick={() => console.log(center)}>
      Get info
    </button>
  </div>
)

export default Place
