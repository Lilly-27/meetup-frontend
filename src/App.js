import { Route, Routes } from 'react-router-dom';
import "./App.css";
import EventDisplay from './components/EventDisplay';
import EventHomepage from './components/Homepage/EventHomepage';
import EventDetails from './components/UpdateRoute/EventDetails';
import EventForm from './components/EventForm';

import Show from './components/Show';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Socials from './components/Socials';
import Coffee from './components/Coffee';
import Coding from './components/Coding';
import CoffeeId from './components/CoffeeId';
import CodingId from './components/CodingId';
import SocialsId from './components/SocialsId'


import DeleteEvent from './components/UpdateRoute/DeleteEvent';
import UpdateEvent from './components/UpdateRoute/UpdateEvent';

function App() {
  return (
    <div className="App">
          
          <Routes >
          <Route exact path='/' element={<Show/>}/>
          <Route exact path='/events' element={<EventHomepage/>}/>
          <Route exact path='/events/display' element ={<EventDisplay/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>

          <Route exact path='/events/socials' element={<Socials/>}/>
          <Route exact path='/events/coffee' element={<Coffee/>}/>
          <Route exact path='/events/coding' element={<Coding/>}/>
          <Route exact path='/events/socials/:id' element={<SocialsId/>}/>
          <Route exact path='/events/coffee/:id' element={<CoffeeId/>}/>
          <Route exact path='/events/coding/:id' element={<CodingId/>}/>

          <Route exact path='events/display/:id' element={<EventDetails/>}/>
          <Route exact path='events/display/:id/delete' element={<DeleteEvent/>}/>
          <Route exact path='events/display/:id/update' element={<UpdateEvent/>}/>
          
          <Route exact path='/event-form' element={<EventForm/>}/>

          </Routes>
          
    </div>
  );
}

export default App;
