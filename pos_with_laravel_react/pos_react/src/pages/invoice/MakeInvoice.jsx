import React from 'react';
import Navebar from '../../component/Navebar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';

const MakeInvoice = () => {
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
                    Invoice  Make |
                      <small>Preview</small>
                    </h1>
                    <ol className="breadcrumb">
                      <li><a href="#"><i className="fa fa-dashboard" /> Home || </a></li>
                      <li><a href="#">Table  </a></li>
                      <li className="active">General Elements</li>
                    </ol>
                </section> <br /> <br />
  {/* -----Customer-------- */}
                <form action method="post" >
                <div className="row col col-md-12">
                    <div className="row col col-md-12 font-weight-bold">
                    <div className="col col-md-3" htmlFor="CustomerName">Customer Name:</div>
                    <div className="col col-md-3" htmlFor="Number">Number</div>
                    <div className="col col-md-3" htmlFor="CustomId">Custom Id</div>
                  <div className="col col-md-3" htmlFor="Action">Action</div>

                    </div>
                </div>
                <div className="row col col-md-12">
                    <div className="row col col-md-12 font-weight-bold">
                    <div className="col col-md-3"><input id="CustomerName" type="text" className="form-control" name="CustomerName" placeholder="Customer Name" /></div>
                    <div className="col col-md-3"><input id="Number" type="number" className="form-control" name="Number" placeholder="Number" /></div>
                    <div className="col col-md-3"><input id="CustomId" type="text" className="form-control" name="CustomId" placeholder="Custom Id" /></div>
                    <div className="col col-md-3">
                   <button type="submit" className="btn btn-primary form-control" name="Action">Edit</button>

               </div>
                   
                    
                    </div>
                    <div className="col col-md-12">
                    <hr className="col-md-12" style={{padding: 0, borderTop: '2px solid  #02b6ff'}} />
                    </div>
                    <div className="row col col-md-12 " id="invoice_medicine_list_div">
                    {/*jodi jhamala hoi ai funtion ta script er vatore bosbe... getInvoiceNumber(); */}
                    </div>
                  
                    <div className="row col col-md-12">
                    <div className="col col-md-6 form-group" />
              
                   
                    
                    </div>
                    <div>
                    <hr style={{borderTop: '2px solid #ff5252'}} />
                    </div>
                </div>
              
               </form>
{/* -----invoice-------- */}
         <form action method="post" >
                <div className="row col col-md-12">
                    <div className="row col col-md-12 font-weight-bold">
                    <div className="col col-md-3" htmlFor="items Name">Items Name:</div>
                    <div className="col col-md-2" htmlFor="Quantity">Quantity</div>
                    <div className="col col-md-2" htmlFor="MRP">MRP</div>
                    <div className="col col-md-2" htmlFor="Discount">Discount(%)</div>
                    <div className="col col-md-3" htmlFor="Vat">Vat</div>
                    {/* <div class="col col-md-2"for="Action">Action</div> */}
                    </div>
                </div>
                <div className="row col col-md-12">
                    <div className="row col col-md-12 font-weight-bold">
                    <div className="col col-md-3"><input id="items Name" type="text" className="form-control" name="items Name" placeholder="items Name" /></div>
                    <div className="col col-md-2"><input id="Quantity" type="number" className="form-control" name="Quantity" placeholder="Quantity" /></div>
                    <div className="col col-md-2"><input id="MRP" type="text" className="form-control" name="MRP" placeholder="MRP" /></div>
                    <div className="col col-md-2"><input id="Discount" type="text" className="form-control" name="Discount" placeholder="Discount" /></div>
                    <div className="col col-md-3"><input id="Vat" type="text" className="form-control" name="Vat" placeholder="Vat" /></div>
                    {/* <div class="col col-md-2"><input id="Action" type="text" class="form-control" name="Action" placeholder="Action" ></div>
                    </div> */}
                    </div>
                    <div className="col col-md-12">
                    <hr className="col-md-12" style={{padding: 0, borderTop: '2px solid  #02b6ff'}} />
                    </div>
                    <div className="row col col-md-12 " id="invoice_medicine_list_div">
                    {/*jodi jhamala hoi ai funtion ta script er vatore bosbe... getInvoiceNumber(); */}
                    </div>
                    {/* end medicines */}
                    <div className="row col col-md-12">
                    <div className="col col-md-6 form-group" />
                    <div className="col col-md-2 form-group float-right">
                        <label className="font-weight-bold" htmlFor>Total Amount:</label>
                        <input type="text" className="form-control" defaultValue={0} id="total_amount" />
                    </div>
                    <div className="col col-md-2 form-group float-right">
                        <label className="font-weight-bold" htmlFor>Total Discount :</label>
                        <input type="text" className="form-control" defaultValue={0} id="total_discount" />
                    </div>
                    <div className="col col-md-2 form-group float-right">
                        <label className="font-weight-bold" htmlFor>Net Total :</label>
                        <input type="text" className="form-control" defaultValue={0} id="net_total" />
                    </div>
                    </div>
                    <div>
                    <hr style={{borderTop: '2px solid #ff5252'}} />
                    </div>
                </div>
                <input type="submit" name="submit" defaultValue="submit" className="form-control btn btn-success" />
                {/* <button class="btn btn-success  text-right">Submit</button> */}
                {/* <button class="btn btn-danger">Cancel</button> */}
        </form>


            </div>
          </div>  
       </div>
     
        <Footer/>
    </div>
    );
};

export default MakeInvoice;