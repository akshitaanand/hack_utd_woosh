import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./components/login"
import logo from "./utd.jpeg"
import Dashboard from './components/dashboard';



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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find a New Friend</a>
      </li>
    </ul>
 
  </div>
</nav>
  
      <Route path = "/" exact component = {Login} />
      <Route path = "/dashboard" exact component = {Dashboard} />
    </Router>

  );
}

export default App;