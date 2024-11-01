const taccount = () => {
    return ( 
        <div className="Trainer-Account">
            <body>
                <div class="login-conatiner">
                    <div class="login-form">
                        <form class="formid">
                            <p> <b>Create a new Account</b></p>
                            <label for="First-Name">First-Name</label>
                            <input type="First-Name" id="email" placeholder="Enter your first name" required />
                            <label for="Last-Name">Last-Name</label>
                            <input type="Last-Name" id="last-name" placeholder="Enter your last name" required/>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required/>
                            <label for="Phone-number">Phone number</label>
                            <input type="Phone-number" id="Phone-number" placeholder="Enter your Phone number" required />
                            <button type="submit" className="btn-signin">Submit</button>
                        </form>
                        <p>Already having Account  <a href="#">Sign-in<i class="fas fa-long-arrow-up    "></i></a></p>
                    </div>
                </div>
            </body>
        </div>
     );
}
 
export default taccount;