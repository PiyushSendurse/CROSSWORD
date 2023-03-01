// import ReCAPTCHA from "react-google-recaptcha";
// import React, { useState } from "react";


function Login() {
    return (
        <section className="home-wrapper-1 py-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <form className="Auth-form" /*onSubmit={handleSubmit}*/>
                            <h3 className="Auth-form-title">Sign In</h3>

                            <div className="form-group mt-3">
                                <label style={{ textAlign: 'left' }}>Role: </label><br></br>
                                <input type="radio" id="role" name="role" value="customer" />&nbsp;Customer &nbsp;&nbsp;
                <input type="radio" id="role" name="role" value="Admin" />&nbsp;Admin  &nbsp;&nbsp;
              </div>

              <div className="form-group mt-3">
                <label>Email address :</label>

                <input
                  type="email"
                  name="email"
                  // value={data.email}
                  // onChange={handleChange}
                  className="form-control mt-1"
                  placeholder="Enter Email"
                />
              </div>

              <div className="form-group mt-3" >
                <label style={{ textAlign: 'left' }}>Password :</label>
                <input
                  type="password"
                  name="password"
                  // value={data.password}
                  // onChange={handleChange}
                  className="form-control mt-1"
                  placeholder="Enter Password"
                />
              </div>

              <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                {/* <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleChangeRecaptcha}
                /> */}
              </div>


              <div />

              <br></br>
              <button type="submit" className="btn btn-primary">Login</button>
              <p>
                <a href="./ForgotPassword"> Forgot Password?</a>
              </p>
              {/* <div><button className="btn btn-primary" onClick={forgotPassword}>Forgot password?</button></div> */}


              <p className="forgot-password text-right mt-2">
                <a href="SignUp">Register here</a>
              </p>

            </form>
          </div>
          <div className="col-6">
            <img src="images/login.jpg" className="img-fluid rounded-5" alt="signupbrand"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;