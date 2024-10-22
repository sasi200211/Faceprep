import logo from './logo.svg';
import Navbar from './navbar';
import Home from './Home';
import Info from './Info';
import Signin from './Signin';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Info/>
      <Contact/>
      <Signin/>
    </div>
  );
}

export default App;
