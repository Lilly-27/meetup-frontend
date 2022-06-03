import React, {useState, useEffect} from 'react'
import { useParams, Link, Route } from 'react-router-dom'
import DeleteEvent from './UpdateRoute/DeleteEvent';

function CoffeeId(props) {
    let {id} = useParams();
    const [event, setEvent] = useState(null);
    useEffect(() => {
        fetch( `https://meetup-for-devs.herokuapp.com/api/coffeechats/${id}`)
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
            <h2>People attending: </h2>
          </div>
          <>
          <form >
          <Link to={`/events/coffee/${id}/delete`}>
         
     <button id="delete" >
            DELETE

          </button>
          </Link>
    </form>

    <form >
          <Link to={`/events/coffee/${id}/update`}>
         
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

export default CoffeeId