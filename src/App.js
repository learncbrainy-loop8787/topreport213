import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'; //lets you access the history instance used by React Router.
import './App.css';

import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyProfile from './containers/MyProfile'
import ReportContainer from './containers/ReportContainer'
import NavBar from './components/NavBar'
import ReportPage from './components/ReportPage'

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} history={history}/>
            <Route exact path='/signup' component={Signup} history={history}/>
            <Route exact path='/myprofile' component={MyProfile} history={history}/>
            <Route exact path='/reports' component={ReportContainer} history={history}/>
            <Route exact path='/reports/:id' component={ReportPage} history={history} />
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
