const Student = () => {
    return (
        <div className="Student">
            <body>
                <div class="login-conatiner">
                    <div class="login-form">
                        <h1>Welcome back!</h1>
                        <form>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required/>
                            <div class="form-options">
                                <label><input type="checkbox"/>Remember me</label>
                                <a href="#">Forget Password?</a>
                            </div>
                            <button type="submit" className="btn-signin">signin</button>
                            <button type="btn-google">Sign in with Google</button>
                            <button type="btn-facebook">sign in with Facebook</button>
                        </form>
                        <p>Create a new Account<a href="#">Sign up<i class="fas fa-long-arrow-up    "></i></a></p>
                    </div>
                </div>
            </body>
        </div>
     );
}
 
export default Student;