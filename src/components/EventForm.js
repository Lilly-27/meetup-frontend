import React, { useState } from 'react';

function EventForm() {
  const initialState = { username: '', password: '' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialState);
  };
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="event_name">Event Name:</label>
      <input
        id="event_name"
        type="text"
        onChange={handleChange}
        value={formState.event_name}
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="text"
        onChange={handleChange}
        value={formState.date}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default EventForm;