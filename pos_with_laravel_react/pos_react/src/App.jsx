import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Addseler from './pages/holseler/Addseler';


const App = () => {
  return (
    <div>
      <Router>
         <Routes> 
             
              <Route path = "/" element = { <Dashboard />} />
              <Route path = "/contach" element = { <Contact />} />
              <Route path = "/Addseler" element = { <Addseler />} />
          </Routes> 
     </Router>

    </div>
  );
};

export default App;
