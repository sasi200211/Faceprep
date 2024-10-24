
import Navbar from './navbar';
import Home from './Home';
import Info from './info';
import Signin from './Signin';
import Contact from './Contact';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom';
function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/Info">
          <Info/>
          </Route>
          <Route exact path="/Contact">
          <Contact/>
          </Route>
          <Route exact path="/Signin">
          <Signin/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
