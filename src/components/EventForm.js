import React, { useState } from 'react';


const URL = 'https://meetup-for-devs.herokuapp.com/api/events'

function EventForm() {
  const initialState = { event_name: '', date: '' , tag: ''};
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(URL, {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState)
  })

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

      {/* <label htmlFor="tag">Tag (test): </label>
      <input
        id="tag"
        type="text"
        onChange={handleChange}
        value={formState.tag}
      />
     */}
    <label>
            Event Type: 
          <select onChange={handleChange} id="tag" type="text" value ={formState.tag}>
            <option id="tag" value="please_select">Please choose an Option</option>
            <option id="tag" value="coffee_chats">Coffee Chats</option>
            <option id="tag" value="coding_sessions">Coding Sessions</option>
            <option id= "tag" value="socials">Socials</option>
          </select>
          </label>


      <button type="submit">Submit</button>
    </form>
  );
}
export default EventForm;