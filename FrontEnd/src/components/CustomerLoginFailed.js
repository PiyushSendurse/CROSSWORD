import { Link } from 'react-router-dom';
import { useState } from 'react';
import adminService from '../services/admin.service ';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CustomerLoginFailed = (props) => {
 

    return (
        <>
            <div>.....</div>
            <div>.....</div>
            <div>.....</div>
            <div>.....</div>
            <h1>You have enetered incorrect username or password</h1>
        <h1>Failed to Login </h1>
        

        <Link to='/customerlogin' className='btn btn-primary mb-2'>
        <h2>click here to login again</h2>
          </Link>

        </>
    );
}
export default CustomerLoginFailed;