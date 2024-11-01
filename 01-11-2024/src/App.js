import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Home';
import About from './About';
import Navbar from './navbar';
import Student from './Student';
import Trainer from './Trainer';
import taccount from './taccount';
import { BroswerRouter as Router,Route,Switch} from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
    <Navbar/>
    <div className='content'>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/">
        <About/>
        </Route>
        <Route exact path="/">
        <Student/>
        </Route>
        <Route exact path="/">
        <Trainer/>
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
   
  );
}

export default App;
