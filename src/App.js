import { Route, Routes } from 'react-router-dom';
import EventHomepage from './components/EventHomepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Show from './components/Show';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
          <div className="Header">
            <Header />
          </div>

          <div className="Show">
            <Show />
          </div>

          <div className="Footer">
            <Footer />
          </div>
          <Routes >
          <Route exact path='/events' element={<EventHomepage/>}/>
          </Routes>
          
    </div>
  );
}

export default App;
