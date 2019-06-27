import React from 'react'
import ContentLoader from 'react-content-loader'

import './styles.scss'

const PlaceBox = ({
  name,
  location,
  loading,
  ...props,
}) => {
  if (loading) {
    return (
      <div className="place-box">
        <div className="content">
          <ContentLoader
            height={140}
            width={250}
            speed={1}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="0" y="8" rx="4" ry="4" width="117" height="16" />
            <rect x="0" y="30" rx="3" ry="3" width="85" height="8" />
            <rect x="0" y="80" rx="3" ry="3" width="250" height="13" />
            <rect x="0" y="100" rx="3" ry="3" width="250" height="13" />
            <rect x="0" y="120" rx="3" ry="3" width="101" height="10" />
          </ContentLoader>
        </div>
      </div>
    )
  }

  return (
    <div className="place-box">
      <div className="content">
        <div>
          <p>{name}</p>
          <span>{location}</span>
        </div>

        <div>
          <div className="weather">Weather today <span>{props.temp} °C</span></div>
          <div className="weather">Average weather next week <span>{props.temp} °C</span></div>
          <div className="weather-description">{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default PlaceBox
