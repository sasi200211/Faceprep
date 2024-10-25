import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (  
      <nav className="navbar" style={{
        // backgroundColor:"white",
        borderRadius:'8px'
      }}>
        <h1>Study Sphere </h1>
            <div class="links">
                <Link to="/" >Home</Link>
                <Link to="/Info">About-us</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Signin">Sign-up</Link>
                {/* <a href="#" style={{
                  color:"white",
                 // backgroundColor:"red",
                 // borderRadius:'8px'
                }}>Sign-up</a> */}
            </div>
      </nav>
    );
}
 
export default Navbar;