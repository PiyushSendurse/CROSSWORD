import { Link } from 'react-router-dom';
import { useState } from 'react';
import customerService from '../services/customer.service';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Customer from './Customer';

const CustomerLogin = (props) => {
 
    const navigate=useNavigate();
        let [custOb,setCustOb]=useState({email:"",password:""});
        let [custId,setCustId]=useState("");
        let [customerFlag,setCustomerFlag]=useState(false);
        let [loginFlag,setLoginFlag]=useState(true);
    const handleChange=(event)=>{
        // console.log("in handle change");
        const {name,value} =event.target
        setCustOb({...custOb,[name]:value});
    }

    // function validatedata(){
    //     alert("validate");
    //     flag=validateName();
    //     flag1=validateGender();
    //     flag2=validatehobbies();
    //     flag3=validatecity();
    //     if(flag && flag1 && flag2 && flag3)
    //       return true;
    //     else
    //      return false;
    // }

    function sendLoginRequest(){
        console.log("inside login ..");
        console.log("inside yess ..");
        console.log(custOb);

        customerService
        .loginCustomer(custOb)
        .then((response) => {
          console.log('customer validated successfully ', response.data);
         // history.push('/category');
        //  console.log('id of the customer', response.data.id);
         setCustId(response.data.id);

         console.log('id of the customer', response.data.id);
         console.log('id of the customer', custId);
         setLoginFlag(false);
        //  navigate(`/customer`);
          // <Link to='/category'>Back to List</Link>
        })
        .catch((error) =>{
          console.log('something went wroing' + error.response);
          navigate("/customerloginFailed");
        });


    }






    return (
        <>
        

        {loginFlag?(
           
       

            <div id="loginContainer">
                <form class="login-form" >
                    <div class="title">
                        <p>Customer Login</p>
                    </div>

                    <div class="form-group">
                <input type="text" class="form-control" id="email" name="email" 
                value={custOb.email} 
                onChange={handleChange}
                placeholder="enter email"/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="password" name="password" 
                value={custOb.password} 
                onChange={handleChange}
                placeholder="enter password"/>
            </div>
 
                    <div class="remember-me">
                        <input type="checkbox" name="remember" id="checkbox" />
                        <label for="checkbox">Remember Me</label>
                    </div>

                    <div class="forgot-pass">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>

                    <div class="login-button">
                        <input id="submit" type="button" value="login"  onClick={()=>sendLoginRequest()} required/>
                    </div>
                    <div class="signup-link">
                        <Link to="/signup">Signup for New Account Here</Link>
                    </div>
                </form>
            </div>
            ):
            <Customer customerId={custId}></Customer>
            };

            
        </>
    );
}
export default CustomerLogin;