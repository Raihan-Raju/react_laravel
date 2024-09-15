import React from 'react';
import Navebar from '../../component/Navebar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';

const AddCatagory = () => {
    return (
        <div className='min-vh-100'>
        <Navebar/>
        <Sidebar/>
       <div className="container min-vh-100">
         <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
                <section className="content-header d-flex justify-content-between flex-row" >
                    <h1>
                   Add  Catagory   |
                      <small>Preview</small>
                    </h1>
                    <ol className="breadcrumb">
                      <li><a href="#"><i className="fa fa-dashboard" /> Home || </a></li>
                      <li><a href="#">Table  </a></li>
                      <li className="active">General Elements</li>
                    </ol>
                </section>

               <form action method="post" > <br /> <hr className='bg-secondary'/><br /><br />
               <div className="border border-info rounded-3 p-3">
                Catagory: <input type="text" name="name" className="form-control" />
                Name: <input type="text" name="name" className="form-control" />
                Quantity: <input type="number" name="Quantity" className="form-control p-2" />
                Price: <input type="number" name="Price" className="form-control p-2" />
                Image: <input type="file" name="Image" className="form-control p-2" />
               </div> 
                <br />
                <input type="submit" name="submit" defaultValue="submit" className="btn btn-primary p-2" />
               </form>

            </div>
          </div>  
       </div>
     
        <Footer/>
    </div>
    );
};

export default AddCatagory;