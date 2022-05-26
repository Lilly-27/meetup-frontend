import React, { useState, useEffect } from 'react'

const EventHomepage = () => {
    
const url = 'https://meetup-for-devs.herokuapp.com/events'

const [events, setEvents] = useState(null);


useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setEvents(json)
  
  
    })
    .catch(console.error)
    


}, []);



  return (
      events.map(event => (

     
      <div>
    <h1>Event Homepage</h1>

    <form action="/" method="get">
    <label htmlFor="header-search"></label>
    <input
        type="text"
        id="header-search"
        placeholder="Search events"
        name="s" 
    />
    <button type="submit">Search</button>
</form>

</div>
))
      )
      }

export default EventHomepage