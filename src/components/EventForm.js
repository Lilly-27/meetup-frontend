import React, { useState } from 'react';

const URL = 'https://meetup-for-devs.herokuapp.com/api/events'

function EventForm() {
  const initialState = { username: '', password: '' };
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
      <label htmlFor="Field 3">Field 3: </label>
      <input
        id="field-3"
        type="text"
        onChange={handleChange}
        value={formState.field-3}
      />
      <br/>
      <label htmlFor="Field 4">Field 4: </label>
      <input
        id="field-4"
        type="text"
        onChange={handleChange}
        value={formState.field-4}
      />

      <div className="radio"> 
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
            </label>

          </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default EventForm;