import React, {useState, useEffect} from 'react'
import { useParams, Link, Route } from 'react-router-dom'
import DeleteEvent from './DeleteEvent';

function EventDetails(props) {
    let {id} = useParams();
    const [event, setEvent] = useState(null);
    useEffect(() => {
        fetch( `https://meetup-for-devs.herokuapp.com/api/events/${id}`)
        .then(res => res.json())
        .then(res => setEvent(res))
        .catch(console.error)
    }, [])

    if (!event){
        return(
        <div>        
            <h1>Loading ...</h1>
            <h2>I am working wooo</h2>
        </div>
    )
    }

    return (
        <div className="details-container">
          <img
            src={event.event_picture}
            alt={event.event_blurb}
          />
          <div className="details">
            <h2>{event.date}</h2>
            <h2>{event.event_blurb}</h2>
            <h2>People attending: </h2>
            <ul>
              <li></li>
            </ul>
          </div>
          <>
          <form >
          <Link to={`/events/display/${id}/delete`}>
         
     <button id="delete" >
            DELETE

          </button>
          </Link>
    </form>
          
        <Link to={`/events`}>
        <h1>Return to Homepage</h1>
        </Link>
    </>
        </div>
      );
}

export default EventDetails