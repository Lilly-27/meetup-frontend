

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function UpdateEvent() {
    const navigate = useNavigate()

    let {id} = useParams();
    const URL = `https://meetup-for-devs.herokuapp.com/api/events/${id}`

  const initialState = {};
  const [formState, setFormState] = useState(initialState);
    const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  useEffect(()=>{


      console.log(id)
      fetch(URL)
      .then(res => res.json()
      .then(json => {
        console.log(json)
        setFormState(json)
      }))
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(URL, {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState)
     
  })
  navigate(`/events`)
    console.log(formState);
    
    setFormState(initialState);
  };
 console.log(formState)
  return (
    <form onSubmit={handleSubmit} className='update'>
      <label htmlFor="event_name">Event Name: </label>
      <input
        id="event_name"
        type="text"
        onChange={handleChange}
        value={formState.event_name}
        
      />
      <br/>
      <label htmlFor="date">Date: </label>
      <input
        id="date"
        type="text"
        onChange={handleChange}
        value={formState.date}
      />
      <br/>

      <label htmlFor="time">Time: </label>
      <input
        id="time"
        type="text"
        onChange={handleChange}
        value={formState.time}
      />
      <br/>

      <label htmlFor="address">Address: </label>
      <input
        id="address"
        type="text"
        onChange={handleChange}
        value={formState.address}
      />
      <br/>

      <label htmlFor="event_blurb">Event description: </label>
      <input
        id="event_blurb"
        type="text"
        onChange={handleChange}
        value={formState.event_blurb}
      />
      <br/>

      <label htmlFor="event_picture">Event picture: </label>
      <input
        id="event_picture"
        type="text"
        onChange={handleChange}
        value={formState.event_picture}
      />
      <br/>

      <label htmlFor="tag">Tag (test): </label>
      <input
        id="tag"
        type="text"
        onChange={handleChange}
        value={formState.tag}
      />
    

   

      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdateEvent