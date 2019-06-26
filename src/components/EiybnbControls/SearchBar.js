import React from 'react'
import { MdSearch } from 'react-icons/md'

import './styles.scss'

const SearchBar = () => (
  <form className="search-container">
    <input type="text" placeholder="Search for a place" />
    <MdSearch />
  </form>
)

export default SearchBar
