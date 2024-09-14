
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Dashboard from './admin_pages/Dashboard';



const App = () => {
  return (
    <>
      <router>
         <Routes> 
             
             <Route path = "/" element = { <Dashboard />} />
            
         </Routes> 
      </router>
     
    </>
  );
};

export default App;