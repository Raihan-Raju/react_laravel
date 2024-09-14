import React from 'react';
import Navebar from '../../component/Navebar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';

const Addseler = () => {
    return (
        <div>
            <Navebar/>
            <Sidebar/>
           <div className="container">
             <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                   <form action method="post" className="form-control">
                   Name: <input type="text" name="name" className="form-control" />
                    Phone: <input type="text" name="phone" className="form-control" />
                    Email: <input type="text" name="email" className="form-control p-2" /> <br />
                    <input type="submit" name="submit" defaultValue="submit" className="btn btn-primary p-2" />
                   </form>

                </div>
              </div>  
           </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est consequatur sunt architecto fugiat aspernatur earum dolore magnam voluptates illo nostrum provident impedit molestiae veniam pariatur exercitationem itaque, debitis ipsum.
            <Footer/>
        </div>
    );
};

export default Addseler;