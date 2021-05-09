import './App.css';
import Home from './components/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'
import CoachIntro from './components/CoachIntro'
import CoachMessage from './components/CoachMessage'
import CoachStart from './components/CoachStart'
import Coach from './components/Coach'
import CoachPlan from './components/CoachPlan'

function App() {
  return (
    <div className="App">
    <Switch>

        {/*Drreamz Authentication Routes */}
        <Route path='/' component={Home} exact/>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/login' component={Login} exact/>

        {/*Coach Routes */}
        <Route path='/coach-intro' component={CoachIntro} exact/>
        <Route path='/coach-message' component={CoachMessage} exact/>
        <Route path='/coach-start' component={CoachStart} exact/>
        <Route path='/coach-plan-payment' component={CoachPlan} exact/>
        <Route path='/coach' component={Coach} exact/>
        

    </Switch>
    
    </div>
  );
}

export default App;
