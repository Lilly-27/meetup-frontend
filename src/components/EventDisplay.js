import React, { useState, useEffect }from 'react'
import { useParams, Link } from 'react-router-dom';
import EventDetails from './EventDetails';
import EventHomepage from './Homepage/EventHomepage';

const EventDisplay = () => {
    
    let {_id} = useParams();

const [events, setEvents]= useState([])
const url= `https://meetup-for-devs.herokuapp.com/api/events/`
    useEffect(() => {

        fetch(url)


        .then(res => res.json())
        .then(json => {
          setEvents(json)
      
      
        })
        .catch(console.error)
      }, []
    );

  return (
      
      events.map(events=> (
    <div>
        
  
    
    <div>
        <Link to={`${events._id}`}key={events._id}>
        <h1>{events.event_name}</h1>
        </Link>
        <img src ={events.event_picture} />
    </div>
    
    <div style={{
          position:"initial",
          left: 0,
          bottom: 0,
          right: 0,
          
        }}>
        <Link to={`/events`} >
        <h3>Return to Homepage</h3>
        </Link>
    </div>

    </div>
    
    ))
    )}

export default EventDisplay