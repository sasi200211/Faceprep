const Signin = () => {
    return (  
        <div className="Signin">
            <h2>Sign-in</h2>
            <form action="">
                <table border="5" bgcolor="grey" align="center" cellPadding="10">
                <tr>
                    <td>
                     <b>USER NAME:</b></td>
                    <td>
                    <input type="text" class="input" placeholder="Study Sphere"/>
                    </td><br />
                </tr>
                <tr>
                    <td>
                     <b>Password:</b></td>
                    <td>
                    <input type="text" class="input" placeholder="Abcef$123"/>
                    </td><br />
                </tr>
                <tr>
                    <td>
                    <input type="submit" name="log" value="Login"/>
                    <input type="submit" name="log" value="Reset"/>
                    </td>
                    <td><a href='#'>Forget Password?</a></td>
                    <td><a href="#">Create Account</a></td> 
                </tr>
                </table>
            </form>
        </div>
    );
}
 
export default Signin;