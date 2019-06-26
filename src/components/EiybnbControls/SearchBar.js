import React from 'react'

import './styles.scss'

const SearchBar = () => (
  <form className="search-container">
    <input type="text" placeholder="Search for a place" />
    <a href="#">
      <img
        alt=""
        className="search-icon"
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
      />
    </a>
  </form>
)

export default SearchBar
