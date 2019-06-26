import React from 'react'

import './styles.scss'

const SunShower = () => (
  <button type="button" className="icon sun-shower">
    <div className="cloud"></div>
    <div className="sun">
      <div className="rays"></div>
    </div>
    <div className="rain"></div>
  </button>
)

const ThunderStorm = () => (
  <button type="button" className="icon thunder-storm">
    <div className="cloud"></div>
    <div className="lightning">
      <div className="bolt"></div>
      <div className="bolt"></div>
    </div>
  </button>
)

const Cloudy = () => (
  <button type="button" className="icon cloudy">
    <div className="cloud"></div>
    <div className="cloud"></div>
  </button>
)

const Flurries = () => (
  <button type="button" className="icon flurries">
    <div className="cloud"></div>
    <div className="snow">
      <div className="flake"></div>
      <div className="flake"></div>
    </div>
  </button>
)

const Sunny = () => (
  <button type="button" className="icon sunny">
    <div className="sun">
      <div className="rays"></div>
    </div>
  </button>
)

const Rainy = () => (
  <button type="button" className="icon rainy">
    <div className="cloud"></div>
    <div className="rain"></div>
  </button>
)

class WeatherIcons extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="weather-icons-navigation-menu">
          <h3>What is your favorite weather?</h3>
          <div className="items">
            <SunShower />
            <ThunderStorm />
            <Cloudy />
            <Flurries />
            <Sunny />
            <Rainy />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default WeatherIcons
