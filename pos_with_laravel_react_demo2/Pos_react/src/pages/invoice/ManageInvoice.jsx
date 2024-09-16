import React from 'react';
import Navebar from '../../component/Navebar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';

const ManageInvoice = () => {
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
                        Invoice  Information  |
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
                            <th scope="col">costomer Name</th>
                            <th scope="col">Catagory</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">MRP TK</th>
                            <th scope="col">Vat</th>
                            <th scope="col">Discount %</th>
                            <th scope="col">Net Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
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

export default ManageInvoice;