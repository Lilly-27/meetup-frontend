import { Route, Routes } from 'react-router-dom';
import EventHomepage from './components/EventHomepage';
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
          <Route exact path='/signup' element={<SignUp/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
