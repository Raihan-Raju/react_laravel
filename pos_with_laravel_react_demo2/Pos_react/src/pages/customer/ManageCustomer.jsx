import React from 'react';
import Navebar from '../../component/Navebar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';

const ManageCustomer = () => {
    return (
        <>
        <Navebar/>
        <Sidebar/>
        <div className="container min-vh-100">
             <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <section className="content-header d-flex justify-content-between flex-row" >
                        <h1>
                        Customers  Information  |
                          <small>Preview</small>
                        </h1>
                        <ol className="breadcrumb">
                          <li><a href="#"><i className="fa fa-dashboard" /> Home || </a></li>
                          <li><a href="#">Forms  </a></li>
                          <li className="active">General Elements</li>
                        </ol>
                    </section> <hr />

                   <table className="table  table-striped border border-info rounded-3 p-3">


                        <thead>
                            <tr>
                            <th scope="col">#NO</th>
                            <th scope="col">Costomer Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Custom ID</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Edit / Delete</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
              </div>  
           </div>
          <Footer/>
      </>
    );
};

export default ManageCustomer;