import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function EventDetails(props) {
    let {id} = useParams();
    const [event, setEvent] = useState(null);
    useEffect(() => {
        fetch( `https://meetup-for-devs.herokuapp.com/events/${id}`)
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
            src={event.image}
            alt={event.name}
          />
          <div className="details">
            <h2>{event.date}</h2>
          </div>
        </div>
      );
}

export default EventDetails