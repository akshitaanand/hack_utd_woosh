import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./components/login"
import logo from "./utd.jpeg"
import Dashboard from './components/dashboard';
import Profile from './components/profile';




function App() {
  return (
    
    <Router>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" style = {{margin: 30}} href="#">Hello Friend!</a>
  <img src={logo} width="300" height="100" alt="UTD" style = {{marginRight: 60, marginLeft: 30}}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" style = {{marginRight: 10, marginLeft: 10}}>Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style = {{marginRight: 10, marginLeft: 10}}>Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"style = {{marginRight: 10, marginLeft: 10}}>Find a New Friend</a>
      </li>
    </ul>
 
  </div>
</nav>
  
      <Route path = "/" exact component = {Login} />
      <Route path = "/dashboard" exact component = {Dashboard} />
      <Route path = "/profile" exact component = {Profile} />
    </Router>

  );
}

export default App;