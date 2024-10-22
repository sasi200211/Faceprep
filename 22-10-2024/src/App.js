import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import Info from './Info';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Info/>
    </div>
  );
}

export default App;
