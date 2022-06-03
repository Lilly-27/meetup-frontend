import React, {useState, useEffect} from 'react'
import { useParams, Link, Route } from 'react-router-dom'
import DeleteEvent from './UpdateRoute/DeleteEvent';

function CodingId(props) {
    let {id} = useParams();
    const [event, setEvent] = useState(null);
    useEffect(() => {
        fetch( `https://meetup-for-devs.herokuapp.com/api/codingsessions/${id}`)
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
            <h2>{event.time}</h2>
            <h2>{event.address}</h2>
            <h2>{event.event_blurb}</h2>
            <h2>{event.tag}</h2>
            <h2>{event.user}</h2>

            <h2>People attending: </h2>
            <ul>
              <li></li>
            </ul>
          </div>
          <>
          <form >
          <Link to={`/events/coding/${id}/delete`}>
         
     <button id="delete" >
            DELETE

          </button>
          </Link>
    </form>

    <form >
          <Link to={`/events/coding/${id}/update`}>
         
     <button id="update" >
            UPDATE

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

export default CodingId