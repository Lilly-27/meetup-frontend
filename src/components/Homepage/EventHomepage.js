import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import SearchFetch from './SearchFetch'
const EventHomepage = () => {
    const [events, setEvents] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch('https://meetup-for-devs.herokuapp.com/events')
        .then(res => res.json())
        .then(json => {
          setEvents(json)
      
      
        })
        .catch(console.error)
      }, []
    );


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
            <Link to={`/eventDisplay/628ea406805ac620baaca6b7`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
            <Link to={`/eventDisplay/${events.id}`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
            <Link to={`/eventDisplay/${events.id}`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
     
    </div>
</div>

)
      }

export default EventHomepage