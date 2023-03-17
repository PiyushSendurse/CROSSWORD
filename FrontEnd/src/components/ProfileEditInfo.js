import { Link } from 'react-router-dom';

const ProfileEditInfo = (props) => {
    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/" class="links">Home</Link></li>
                    <li><Link to="/profile" class="links active">Profile</Link></li>
                    <li><Link to="/profile/courses" class="links">Courses</Link></li>
                    <li><Link to="/profile/settings" class="links">Settings</Link></li>
                </ol>
            </div>
            <div class="profileMainDiv">
                <form action="">
                    <h3>Edit Information</h3>
                    <table>
                        <tr>
                            <td><label for="">Full Name</label></td>
                            <td><input type="text" name="fname" placeholder="Alex Grey" required /><br /></td>
                        </tr>

                        <tr>
                            <td><label for="">Date of birth</label></td>
                            <td><input type="date" name="dob" id="" required /><br /></td>
                        </tr>

                        <tr>
                            <td><label for="">Phone</label></td>
                            <td><input type="number" name="" id="" placeholder="+00 000 000 0000" required /><br /></td>
                        </tr>

                        <tr>
                            <td><label for="">Email</label></td>
                            <td><input type="email" name="email" placeholder="alex@gmail.com" required /><br /></td>
                        </tr>

                        <tr>
                            <td><input type="submit" value="Edit" /> <br /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div >
    );
}
export default ProfileEditInfo;