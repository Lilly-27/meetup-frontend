import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom';

const EventDisplay = () => {
    
    let {id} = useParams();

const [events, setEvents]= useState([])
    useEffect(() => {

        fetch(`https://meetup-for-devs.herokuapp.com/api/events`)


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




    <img src ={events.event_picture} />


    </div>
      ))
      )}

export default EventDisplay