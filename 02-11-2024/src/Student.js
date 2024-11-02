import {Link} from "react-router-dom/cjs/react-router-dom.min";
import './taccount';
const Student = () => {
    return (
        <div className="Student">
            <body>
                <div class="login-conatiner">
                    <div class="login-form">
                        <form class="formid">
                            <p> <b>Student Login</b></p>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required/>
                            <div class="form-options">
                            <a href="#">Forget Password?</a>
                            </div>
                            <button type="submit" className="btn-signin">Sign-in</button>
                            <button type="btn-google">Sign-in with Google</button>
                            <button type="btn-facebook">Sign-in with Facebook</button>
                        </form>
                        <p>Create a new Account  <Link to="/taccount">Sign up<i class="fas fa-long-arrow-up    "></i></Link></p>
                    </div>
                </div>
            </body>
        </div>
     );
}
 
export default Student;