import { Route, Routes } from 'react-router-dom';
import EventHomepage from './components/EventHomepage';
import EventDetails from './components/EventDetails';
function App() {
  return (
    <div className="App">
          <h1> Hello Cecilia </h1>
          <Routes >
          <Route exact path='/events' element={<EventHomepage/>}/>
          <Route exact path='/events/:id' element={<EventDetails/>}></Route>
          </Routes>
          
    </div>
  );
}

export default App;
