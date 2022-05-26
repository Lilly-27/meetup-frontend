import { Route, Routes } from 'react-router-dom';
import EventHomepage from './components/EventHomepage';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';
function App() {
  return (
    <div className="App">
          <Routes >
          <Route exact path='/events' element={<EventHomepage/>}/>
          <Route exact path='/events/:id' element={<EventDetails/>}/>
          <Route exact path='/event-form' element={<EventForm/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
