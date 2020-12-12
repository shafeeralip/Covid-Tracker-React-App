import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './component/India';
import World from './component/World';
import State from './component/State';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Switch>
          <Route exact path='/'>

            <India/>
            
          </Route>
          <Route path="/india">
            
            <India/>

          </Route>
          <Route path="/world">
            <World/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
