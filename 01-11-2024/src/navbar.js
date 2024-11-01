import {useState} from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return ( 
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">STUDY SPHERE</h2>
            </div>

            <div class="menu">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Trainer-login</Link>
                <Link to="/">Student-login</Link>
            </div>
        </div> 
     );
}
 
export default Navbar;