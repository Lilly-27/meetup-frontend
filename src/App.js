import { Route, Routes } from 'react-router-dom';
import EventDisplay from './components/EventDisplay';
import EventHomepage from './components/Homepage/EventHomepage';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Show from './components/Show';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
          
          <Routes >
          <Route exact path='/' element={<Show/>}/>
          <Route exact path='/events' element={<EventHomepage/>}/>
          <Route exact path='/eventDisplay' element ={<EventDisplay/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/events/:id' element={<EventDetails/>}/>
          <Route exact path='/event-form' element={<EventForm/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
