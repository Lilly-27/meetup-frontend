import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchFetch from './SearchFetch'
const EventHomepage = () => {
    const [events, SetEvents] = useState([])

return(
<div>
    <SearchFetch />
    <h1>Event Homepage</h1>
    <Link to={`/event-form`}>
        <div className='new-event-btn'>
            <h2>Make a new event!</h2>
        </div>
    </Link>
    <Link to={`/events/`}>
        <div className='tags'>All</div>
    </Link>
    <Link to={`/events/`}>
        <div className='tags'>Coffee Chats</div>
    </Link>
    <Link to={`/events/`}>
        <div className='tags'>Social</div>
    </Link>
    <Link to={`/events/`}>
        <div className='tags'>Coding Sessions</div>
     </Link>
    <div>
        <h2>Popular Events Banner</h2>
            <div className=''></div>
            <Link to={`/events/${events.id}`}>
            <div className='popularEvents'>Popular event</div>
            </Link>
            <Link to={`/events/${events.id}`}>
            <div className='popularEvents'>Popular event</div>
            </Link>
            <Link to={`/events/${events.id}`}>
            <div className='popularEvents'>Popular event</div>
            </Link>
            <Link to={`/events/${events.id}`}>
            <div className='popularEvents'>Popular event</div>
            </Link>
    </div>
</div>

)
      }

export default EventHomepage