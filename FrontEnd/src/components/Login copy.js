import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <>
            <div id="loginContainer">
                <form action="/products" class="login-form">
                    <div class="title">
                        <p>Login</p>
                    </div>
                    <div class="username">
                        <input type="text" name="email" id="email" placeholder="Email" required />
                    </div>
                    <div class="pass">
                        <input type="password" name="pass" id="pass" placeholder="Password" required />
                    </div>
                    <div class="remember-me">
                        <input type="checkbox" name="remember" id="checkbox" />
                        <label for="checkbox">Remember Me</label>
                    </div>
                   
                    {/* <div class="forgot-pass">
                        <Link to="/">Forgot Password?</Link>
                    </div> */}


                    <div class="forgot-pass">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>

                    <div class="login-button">
                        <input id="submit" type="submit" value="Login" required/>
                    </div>
                    <div class="signup-link">
                        <Link to="/signup">Signup for New Account Here</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Login;