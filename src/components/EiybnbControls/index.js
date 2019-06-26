import React from 'react'

import SearchBar from './SearchBar'
import './styles.scss'

export default class EiybnbControls extends React.PureComponent {
  render() {
    return (
      <div className="eiybnb-controls-container">
        <SearchBar />
      </div>
    )
  }
}
