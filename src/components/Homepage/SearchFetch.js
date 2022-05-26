import React, { useState, useEffect }  from 'react'
const url = 'https://meetup-for-devs.herokuapp.com/events'
const response = await fetch('http://localhost:3000/events', { mode: 'cors' });


const SearchFetch = () => {
    const [events, setEvents] = useState({
        slug: "",
        results: []
    });


useEffect(()=>{
    if(events.slug !== "") {
        const timeoutId = setTimeout(()=> {
            const fetch = async () => {
                try{
                    const res = await url.get(`/${events.slug}`);
                    setEvents({...events, results: res.events});
                }catch (err) {
                    console.error(err)
                }
            };
            fetch()
        }, 1000);
        return () => clearTimeout(timeoutId);
    }
    }, [events.slug]);

  return (
      <div>{events, setEvents}</div>
   
  )
}

export default SearchFetch