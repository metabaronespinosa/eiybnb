import React from 'react'

import './styles.scss'

const PlaceBox = ({
  name,
  location,
  weatherToday,
  weatherForecastNextWeek
}) => {
  if (!name) return null

  return (
    <div className="place-box">
      <div className="content">
        <p>{name}</p>
        <span>{location}</span>
        <br />
        <div className="weather-next-week">Weather today <span>{weatherToday}</span></div>
        <div className="weather-next-week">Weather next week <span>{weatherForecastNextWeek}</span></div>
      </div>
    </div>
  )
}

export default PlaceBox
