import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login'

function App() {
  return (

    <Router>
    <div className='App'>
      <header className ='App-header'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Signup} />
        </Switch>
      </header>
    </div>
    </Router>
  )
}

export default App;
