const Navbar = () => {
    return (  
      <nav className="navbar" style={{
        backgroundColor:"#28eb9d",
        borderRadius:'8px'
      }}>
        <h1>SASI BLOG</h1>
            <div class="links">
                <a href="#" >Home</a>
                <a href="#">About-us</a>
                <a href="#">Contact</a>
                <a href="#">Sign-up</a>
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