import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
      <Router>
         <Routes> 
             
              <Route path = "/" element = { <Home />} />
              <Route path = "/contach" element = { <Contact />} />
          </Routes> 
     </Router>

    </div>
  );
};

export default App;
