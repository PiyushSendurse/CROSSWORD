import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import customerService from '../services/customer.service';

const ForgotPassword = (props) => {

    const [email,setEmail]=useState();
    const navigate=useNavigate();
    const forgetPassword =()=>{

        customerService
        .forgetPassword(email)
        .then((response) => {
          console.log('employee added successfully', response.data);
        //  history.push('/category');
        //  navigate("/adminproduct");
        //  props.refreshProducts();
      //  navigate("/customerlogin");
          // <Link to='/category'>Back to List</Link>
        })
        .catch((error) => {
          console.log('something went wroing' + error.response);
          navigate("/adminLoginAgain");
        });

    }


    
    return (
       
        <>
        <div id="loginContainer">
            <form action="/sendPassword" class="login-form">
                <div class="title">
                    <p>Forgot Password</p>
                </div>
                {/* <div class="username">
                    <input type="text" name="email" id="email" placeholder="Email" required />
                </div> */}


<div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='email'
            value={email}
            onChange={(p) => setEmail(p.target.value)}
            placeholder='Enter email'
          />
        </div>
               
                <div class="remember-me">
                    <input type="checkbox" name="remember" id="checkbox" />
                    <label for="checkbox">Remember Me</label>
                </div>
               
                {/* <div class="forgot-pass">
                    <Link to="/">Forgot Password?</Link>
                </div> */}


                {/* <div class="forgot-pass">
                    <Link to="/forgotPassword">Forgot Password?</Link>
                </div> */}

                <div class="login-button">
                    <input id="submit" type="submit" value="SendPassword" onClick={()=>forgetPassword()}  required/>
                </div>
                <div class="signup-link">
                    <Link to="/signup">Signup for New Account Here</Link>
                </div>
            </form>
        </div>
    </>

    );
}
export default ForgotPassword;