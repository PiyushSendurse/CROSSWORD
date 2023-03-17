import { Link } from 'react-router-dom';

const SendPassword = (props) => {
    return (
        <>

            <div id="aboutContainer">
                <h2>About the Company</h2>
                <p id="about">Hi Password has been sent to your mail </p>

               
                {/* <div class="row submit">
                        <input type="submit" value="Go To Login" id="submit" />
                    </div> */}
                    <Link to="/login" class="loginInsted">Login again</Link>
             
                
               
            </div>
        </>
    );
}
export default SendPassword;