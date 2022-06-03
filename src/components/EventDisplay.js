import React, { useState, useEffect }from 'react'
import {  Link } from 'react-router-dom';

const EventDisplay = () => {
    
   

const [events, setEvents]= useState([])
const url= `https://meetup-for-devs.herokuapp.com/api/events/`
    useEffect(() => {

        fetch(url)


        .then(res => res.json())
        .then(json => {
          setEvents(json)
      
        })
        .catch(console.error)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []
    );

  return (
    
      
      events.map((events, index)=> (
    <div key={index} className='display' >
       
  
    
    <div >
        <Link to={`${events._id}`}>
        <h1 key={events.event_name}>{events.event_name}</h1>
        </Link>
        <img src ={events.event_picture} />
    </div>
    
    <div  style={{
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