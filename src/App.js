import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./components/login";


function App() {
  return (
    <Router>
    
      
      <Route path = "/" exact component = {Login} />
  
    </Router>

  );
}

export default App;