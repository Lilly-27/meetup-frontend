import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const URL = 'https://meetup-for-devs.herokuapp.com/api/events'

function EventForm() {
    const navigate= useNavigate()
  const initialState = { event_name: '', date: '' };
  const [formState, setFormState] = useState(initialState);
//   const initialTag = { tag: '' }
//   const[tagState, setTagState] = useState(initialTag)
  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

//   const handleCoffee = () => {
//     setTagState( `coffee_chats`)
//   }
//   const handleCoding = () => {

//     setTagState( `coding_sessions`)
//   }
//   const handleSocial = () => {
//     setTagState( `socials`)
//   }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(URL, {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState)
  })
  navigate(`/events`)
    console.log(formState);
    
    setFormState(initialState);
  };
 
  return (
    <form onSubmit={handleSubmit}>
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
    

      {/* <div className="radio"> 
            <label>
              <input type="radio" name="tag" id="coffee"
              onChange={handleChange}
              value={formState.tag}
            
              />
             Coffee Chats
            </label>

            <label>
              <input type="radio" name="tag" value="social" />
             Social
            </label>
            <label>
              <input type="radio" name="tag" value="coding_sessions" />
              Coding Sessions
            </label> */}

          {/* </div> */}
{/* 
          <button type="submit"
           id="tag"
           type="text"
           onChange={handleChange}
           value={handleCoffee}
          >Coffee Chats</button>
          
          <button type="submit"
           id="tag"
           type="text"
           onChange={handleChange}
           value={handleSocial}
          >Socials</button>
          
          <button type="submit"
           id="tag"
           type="text"
           onChange={handleChange}
           value={handleCoding}
          >Coding Sessions</button> */}


      <button type="submit">Submit</button>
    </form>
  );
}
export default EventForm;