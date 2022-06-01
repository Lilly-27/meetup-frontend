import { Route, Routes } from 'react-router-dom';

import EventDisplay from './components/EventDisplay';
import EventHomepage from './components/Homepage/EventHomepage';
import EventDetails from './components/UpdateRoute/EventDetails';
import EventForm from './components/EventForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Show from './components/Show';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
          

          <Routes >
          <Route exact path='/' element={<Show/>}/>
          <Route exact path='/events' element={<EventHomepage/>}/>
          <Route exact path='/events/display' element ={<EventDisplay/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>

          <Route exact path='/socials' element={<Socials/>}/>


          <Route exact path='events/display/:id' element={<EventDetails/>}/>
          <Route exact path='/event-form' element={<EventForm/>}/>

          </Routes>
          
    </div>
  );
}

export default App;
