const Trainer = () => {
    return ( 
        <div className="trainer">

            <body>
                <div class="login-conatiner">
                    <div class="login-form">
                        <form class="formid">
                            <p> <b>Trainer Login</b></p>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required/>
                            <div class="form-options">
                                <label><input type="checkbox"/>Remember me</label>
                            </div>
                            <div class="form-options">
                            <a href="#">Forget Password?</a>
                            </div>
                            <button type="submit" className="btn-signin">Sign-in</button>
                            <button type="btn-google">Sign-in with Google</button>
                            <button type="btn-facebook">Sign-in with Facebook</button>
                        </form>
                        <p>Create a new Account  <a href="#">Sign up<i class="fas fa-long-arrow-up    "></i></a></p>
                    </div>
                </div>
            </body>
        </div>
     );
}
 
export default Trainer;