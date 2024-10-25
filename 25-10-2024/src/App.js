import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './navbar';
import Student from './Student';
import Trainer from './Trainer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Home/>
    <About/> */}
    <Student/>
    {/* <Trainer/> */}
    </div>
  );
}

export default App;
