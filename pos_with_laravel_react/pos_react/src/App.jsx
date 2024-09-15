import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Addseler from './pages/wholesale/Addseler';
import Manageseler from './pages/wholesale/Manageseler';
import AddCatagory from './pages/catagory/AddCatagory';
import ManageCatagory from './pages/catagory/ManageCatagory';
import AddProducts from './pages/products/AddProducts';
import ManageProducts from './pages/products/ManageProducts';
import MakeInvoice from './pages/invoice/MakeInvoice';
import ManageInvoice from './pages/invoice/ManageInvoice';


const App = () => {
  return (
    <div>
      <Router>
         <Routes> 
             
              <Route path = "/" element = { <Dashboard />} />
              <Route path = "/Addseler" element = { <Addseler />} />
              <Route path = "/Manageseler" element = { <Manageseler />} />
              <Route path = "/AddCatagory" element = { <AddCatagory />} />
              <Route path = "/ManageCatagory" element = { <ManageCatagory />} />
              <Route path = "/AddProducts" element = { <AddProducts />} />
              <Route path = "/ManageProducts" element = { <ManageProducts />} />
              <Route path = "/MakeInvoice" element = { <MakeInvoice/>} />
              <Route path = "/ManageInvoice" element = { <ManageInvoice/>} />

          </Routes> 
     </Router>

    </div>
  );
};

export default App;
