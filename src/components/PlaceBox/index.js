import React from 'react'

import './styles.scss'

const PlaceBox = ({
  name,
  location,
  ...props
}) => {
  if (!name) return null

  return (
    <div className="place-box">
      <div className="content">
        <p>{name}</p>
        <span>{location}</span>
        <br />
        <br />
        <div className="weather">Weather today <span>{props.temp} °C</span></div>
        <div className="weather">Average weather next week <span>{props.temp} °C</span></div>
        <div className="weather-description">{props.description}</div>
      </div>
    </div>
  )
}

export default PlaceBox
