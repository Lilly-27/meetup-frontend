import React, { useState, useEffect }from 'react'


const EventDisplay = () => {
const [events, setEvents]= useState([])
    useEffect(() => {
        fetch('https://meetup-for-devs.herokuapp.com/events')
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
        
    <div>{events.event_blurb}</div>

    <div>{events.address}</div>

    <div>{events.date}</div>

    <div>{events.time}</div>

    <div>{events.event_picture}</div>

    <div>{events.user}</div>

    <div>{events.event_type}</div>

    </div>
      ))
      )}

export default EventDisplay