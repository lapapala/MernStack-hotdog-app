import React, { Component }  from 'react';
import{ BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

import CreateHotdog from "./components/create-hotdog.component";
import EditHotdog from "./components/edit-hotdog.component";
import HotdogList from "./components/hotdogs-list.component";


class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
              <a className="navbar-brand" href="/" targer="_blank">
                <img src={logo} width="60" height="30" alt=""></img>  
              </a>
              <Link to="/" className="navbar-brand">MERN-Stack Hotdog App</Link>

            </div>
   

              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Hotdogs</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Hotdog</Link>
                  </li> 
                </ul>
              </div>
           </nav>
          
          <Route path="/" exact component={HotdogList} />
          <Route path="/edit/:id" exact component={EditHotdog} />
          <Route path="/create" exact component={CreateHotdog} />
        </div>
    </Router>     
      );
  }
}

export default App;
