import React from 'react'

import SearchFetch from './SearchFetch'
const SearchBar = () => {
    const {events, SetEvents} = SearchFetch("")
  return (
    <div>
        <input
            type="text"
            placeholder="Search for events"
            value={events.slug}
            onChange={(e) => SetEvents({...events, slug: e.target.value})}
        />
        <br />
        
    </div>
  )
}

export default SearchBar