import React from 'react';

const Body = () => {
    return (
        <div>
            <table className='table table-hover'> 
                <thead> 
                    <tr className='text-center'> 
                        <th className='bg-success' scope='col'>Id</th>
                        <th className='bg-success' scope='col'>Name</th>
                        <th className='bg-success' scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr className='text-center'> 
                        <th>01</th>
                        <th>Raju</th>
                        <th>Raju@gmail.com</th>
                    </tr>
                    <tr className='text-center'> 
                        <th>01</th>
                        <th>Raju</th>
                        <th>Raju@gmail.com</th>
                    </tr>
                    <tr className='text-center'> 
                        <th>01</th>
                        <th>Raju</th>
                        <th>Raju@gmail.com</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Body;