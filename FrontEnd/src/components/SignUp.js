function SignUp() {
    return (

        <section className="home-wrapper-1 py-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <form className="Auth-form" /*onSubmit={handleSubmit}*/ style={{ marginTop: "10px" }}>
                            <h3 className="Auth-form-title py-2"><b>Register here</b></h3>
                            <label>Email address</label>

                            <input
                                type="email"
                                name="email"
                                // value={anvesh}
                                // onChange={handleChange}
                                className="form-control mt-2"
                                placeholder="Enter Email"
                            />

                            <div className="form-group mt-2" >
                                <label style={{ textAlign: 'left' }}>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    // value={data.password}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter Password" />
                            </div>

                            <div className="form-group mt-3" >
                                <label style={{ textAlign: 'left' }}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    // value={data.firstName}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter Firstname"
                                />


                                <label style={{ textAlign: 'left' }}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    // value={data.lastName}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter Lastname"
                                />
                            </div>

                            <div className="form-group mt-2" >
                                <label style={{ textAlign: 'left' }}>Mobile Nuber</label>
                                <input
                                    type="text"
                                    name="mobNo"
                                    // value={data.mobNo}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter Mobile Number"
                                />
                            </div>

                            <div className="form-group mt-2" >
                                <label style={{ textAlign: 'left' }}>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    // value={data.dob}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter DOB"
                                />
                            </div>

                            <div className="form-group mt-2" >
                                <label style={{ textAlign: 'left' }}>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    // value={data.city}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter city"
                                />
                            </div>


                            <div className="form-group mt-2" >
                                <label style={{ textAlign: 'left' }}>State</label>
                                <input
                                    type="text"
                                    name="state"
                                    // value={data.state}
                                    // onChange={handleChange}
                                    className="form-control mt-1"
                                    placeholder="Enter state"
                                />
                            </div>

                            <br></br>
                            <button type="submit" className="btn btn-success" style={{ textAlign: 'right' }}>Sign Up</button>

                            <p className="forgot-password text-right mt-2" style={{ alignItems: 'right' }}>
                                <p>Already Registered ?</p>
                                <a href="login">Login here</a>
                            </p>
                        </form>
                    </div>

                    <div className="col-6">
                        <img src="images/signup.jpg" className="img-fluid rounded-5" alt="signupbrand"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;