
import { useEffect, useState } from 'react';
import { Routes, Route,useParams, useNavigate } from 'react-router-dom';


function DeleteEvent(props) {
  const navigate = useNavigate()
    const url= `https://meetup-for-devs.herokuapp.com/api/events/`
    const { id } = useParams()

  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      await fetch(url + id, {
        method: 'delete'})
  
        navigate(`/events`)
    };

 
   return(
         <button onClick={handleSubmit}>
           Delete
         </button>

    
   )
  }
  export default DeleteEvent;