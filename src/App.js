import { Route, Routes } from 'react-router-dom';
import EventHomepage from './components/Homepage/EventHomepage';
function App() {
  return (
    <div className="App">
          <h1> Hello Cecilia </h1>
          <Routes >
          <Route exact path='/events' element={<EventHomepage/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
