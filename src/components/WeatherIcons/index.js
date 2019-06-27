import React from 'react'

import './styles.scss'

const SunShower = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon sun-shower ${selected === 'sun-shower'}`}
    onClick={() => onSelectCategory('sun-shower')}
  >
    <div className="cloud"></div>
    <div className="sun">
      <div className="rays"></div>
    </div>
    <div className="rain"></div>
  </button>
)

const ThunderStorm = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon thunder-storm ${selected === 'thunder-storm'}`}
    onClick={() => onSelectCategory('thunder-storm')}
  >
    <div className="cloud"></div>
    <div className="lightning">
      <div className="bolt"></div>
      <div className="bolt"></div>
    </div>
  </button>
)

const Cloudy = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon cloudy ${selected === 'cloudy'}`}
    onClick={() => onSelectCategory('cloudy')}
  >
    <div className="cloud"></div>
    <div className="cloud"></div>
  </button>
)

const Flurries = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon flurries ${selected === 'flurries'}`}
    onClick={() => onSelectCategory('flurries')}
  >
    <div className="cloud"></div>
    <div className="snow">
      <div className="flake"></div>
      <div className="flake"></div>
    </div>
  </button>
)

const Sunny = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon sunny ${selected === 'sunny'}`}
    onClick={() => onSelectCategory('sunny')}
  >
    <div className="sun">
      <div className="rays"></div>
    </div>
  </button>
)

const Rainy = ({ selected, onSelectCategory }) => (
  <button
    type="button"
    className={`icon rainy ${selected === 'rainy'}`}
    onClick={() => onSelectCategory('rainy')}
  >
    <div className="cloud"></div>
    <div className="rain"></div>
  </button>
)

class WeatherIcons extends React.PureComponent {
  render() {
    const { selectedCategory, onSelectCategory } = this.props

    return (
      <React.Fragment>
        <div className="weather-icons-navigation-menu">
          <h3>What is your favorite weather?</h3>
          <div className="items">
            <SunShower selected={selectedCategory} onSelectCategory={onSelectCategory} />
            <ThunderStorm selected={selectedCategory} onSelectCategory={onSelectCategory} />
            <Cloudy selected={selectedCategory} onSelectCategory={onSelectCategory} />
            <Flurries selected={selectedCategory} onSelectCategory={onSelectCategory} />
            <Sunny selected={selectedCategory} onSelectCategory={onSelectCategory} />
            <Rainy selected={selectedCategory} onSelectCategory={onSelectCategory} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default WeatherIcons
