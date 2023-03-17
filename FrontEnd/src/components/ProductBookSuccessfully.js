import { Link } from 'react-router-dom';
import { useState } from 'react';
import adminService from '../services/admin.service ';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ProductBookSuccessfully = (props) => {
 

    return (
        <>
            <div>.....</div>
            <div>.....</div>
            <div>.....</div>
            <div>.....</div>
            <h1></h1>
        <h1> !!  pizza added to cart successfully !!</h1>
        

        <Link to='/customer' className='btn btn-primary mb-2'>
        <h2>Go to CUSTOMERS home page </h2>
          </Link>

        </>
    );
}
export default ProductBookSuccessfully;