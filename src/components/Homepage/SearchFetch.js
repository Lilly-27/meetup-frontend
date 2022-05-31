import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import TextField from '@mui/material/TextField'
const url = `https://meetup-for-devs.herokuapp.com/events`
const response =  fetch('http://localhost:3000/events', { mode: 'cors' });

export default function SearchFetch(){

const [urlData, setUrlData] = useState([])
const [results, setResults] = useState([])
const [searchInput, setSearchInput] = useState('')
useEffect(() => {
    axios.get(url)
    .then((response) => {
        setUrlData(response.data);
    })
}, [])

const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if(searchInput !== ''){
        const results = urlData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setResults(results)
    }else{
        setResults(urlData)
    }
}
return (
    <div >
   <div className='search'>
       {/* <TextField
       id='outlined-basic'
       onChange={setSearchInput}
       variant='outlined'
       fullWidth label= 'Search'/> */}
   </div>
    </div>
)
}









// const url = 'https://meetup-for-devs.herokuapp.com/events'

// const response =  fetch('http://localhost:3000/events', { mode: 'cors' });


// const SearchFetch = () => {
//     const [events, setEvents] = useState({
//         slug: " ",
//         results: []
//     });


// useEffect(()=>{
//     const url = 'https://meetup-for-devs.herokuapp.com/events'

//     if(events.slug !== "") {
//         const timeoutId = setTimeout(()=> {
//             const fetch = async () => {
//                 try{
//                     const res = await url.get(`/${events.slug}`);
//                     setEvents({...events, results: res.events});
//                 }catch (err) {
//                     console.error(err)
//                 }
//             };
//             fetch()
//         }, 1000);
//         return () => clearTimeout(timeoutId);
//     }
//     }, [events.slug]);

//   return (
//       <div>{events, setEvents}</div>
   
//   )
// }

// export default SearchFetch