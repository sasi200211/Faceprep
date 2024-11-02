import {Link} from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return ( 
        <nav className="navbar">
      <div className="logo">Study Sphere</div>
      <ul className="menu">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Trainer">Trainer-login</Link>
        <Link to="/Student">Student-login</Link>
        <Link to="/taccount">New account-login</Link>
      </ul>
    </nav>
     );
}
 
export default Navbar;