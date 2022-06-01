import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import EventDetails from '../EventDetails';
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
<div className='homepage'>
    <h1 className='homepage_banner'>Event Homepage</h1>
    <Link to={`/event-form`}>
        <div className='new-event-btn'>
            <h2>Make a new event!</h2>
        </div>
    </Link>
    <Link to={`/events/display`}>
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
            <Link to={`/events/display/6296b6dbd88c43b2329ce6a5`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
            <Link to={`/events/display/6296b6dbd88c43b2329ce6a6`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
            <Link to={`/events/display/6297afb8969f22db24f1bae0`} key={events.id}>
            <div className='popularEvents'>Popular event
            <img src={events.event_picture} />
            </div>
            </Link>
     
    </div>
</div>

)
      }

export default EventHomepage